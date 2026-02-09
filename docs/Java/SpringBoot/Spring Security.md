# Spring Security

Spring Security 是 Spring 生态中最强大、最灵活的安全框架，用于为 Java（特别是 Spring Boot）应用提供**认证（Authentication）**和**授权（Authorization）**功能，并内置多种安全防护机制。下面从 **核心概念、架构原理、配置方式、实战示例** 四个维度全面详解。

## 核心概念

### 1. 认证（Authentication）

- 验证用户身份（如用户名/密码、Token、OAuth2 等）。
- 成功后生成 `Authentication` 对象，存入 `SecurityContext`。

### 2. 授权（Authorization）

- 控制用户对资源的访问权限（基于角色 `ROLE_ADMIN` 或权限 `PERM_USER_READ`）。
- 支持 URL 级、方法级、甚至数据级（ACL）授权。

### 3. 安全上下文（SecurityContext）

- 存储当前用户的认证信息。
- 通过 `SecurityContextHolder.getContext().getAuthentication()` 获取。

### 4. 用户详情（UserDetails）

- 表示一个用户的核心信息（用户名、密码、权限、账户状态等）。
- 开发者需实现 `UserDetailsService` 接口加载用户。

## 核心架构组件

| 组件                          | 作用             | 说明                                                         |
| ----------------------------- | ---------------- | ------------------------------------------------------------ |
| **SecurityFilterChain**       | 定义安全过滤器链 | 替代旧版 `WebSecurityConfigurerAdapter`（Spring Security 5.7+） |
| **AuthenticationManager**     | 认证入口         | 调用 `AuthenticationProvider` 执行具体认证逻辑               |
| **UserDetailsService**        | 加载用户数据     | 如从数据库查用户                                             |
| **PasswordEncoder**           | 密码加密/验证    | 推荐使用 `BCryptPasswordEncoder`                             |
| **AccessDecisionManager**     | 授权决策         | 判断是否允许访问（默认基于投票机制）                         |
| **FilterSecurityInterceptor** | 最终拦截器       | 检查权限并抛出异常（如 `AccessDeniedException`）             |

```
HTTP Request
    ↓
Security Filter Chain（多个 Filter）
    ↓
UsernamePasswordAuthenticationFilter → AuthenticationManager → UserDetailsService
    ↓
成功 → SecurityContext 存储 Authentication
    ↓
FilterSecurityInterceptor → 授权检查
    ↓
Controller / Service
```

## Spring Boot 集成配置

### 添加依赖

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-security</artifactId>
</dependency>
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
</dependency>
```

### 基础配置类

无状态 jwt 示例

```java
@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public PasswordEncoder passwordEncoder() {
        
        return new BCryptPasswordEncoder();
    }
	
    @Bean
    public UserDetailsService userDetailsService() {
        // 开发环境：内存用户
        UserDetails user = User.builder()
            .username("user")
            .password(passwordEncoder().encode("123456"))
            .roles("USER")
            .build();
        return new InMemoryUserDetailsManager(user);
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.disable()) // REST API 可禁用 CSRF
            .sessionManagement(session -> 
                session.sessionCreationPolicy(SessionCreationPolicy.STATELESS)
            )
            .authorizeHttpRequests(authz -> authz
                .requestMatchers("/login", "/public/**").permitAll()
                .requestMatchers("/admin/**").hasRole("ADMIN")
                .anyRequest().authenticated()
            )
            // 若使用 JWT，添加自定义过滤器
            // .addFilterBefore(jwtFilter(), UsernamePasswordAuthenticationFilter.class)
            ;
        return http.build();
    }
}
```

## SecurityFilterChain

`SecurityFilterChain` 是 **Spring Security 5.7+（特别是 Spring Boot 2.7+ 和 Spring Boot 3.x）中用于配置安全规则的核心组件**，它取代了旧版中基于 `WebSecurityConfigurerAdapter` 的继承式配置方式，采用**函数式、无继承、更简洁的声明式风格**。

### 核心作用

`SecurityFilterChain` 表示 **一组安全过滤器链**，用于定义：

- 哪些请求路径需要认证 / 放行
- 使用哪种认证方式（表单登录、HTTP Basic、JWT 等）
- CSRF、CORS、Session 管理等安全策略

> [!NOTE]
>
> 每个 `@Bean` 类型为 `SecurityFilterChain` 的方法，都会注册一条独立的安全过滤器链。
>
>  Spring Security 会按**注册顺序**匹配请求，**第一条匹配的链生效**。

### 基本用法（Spring Boot 3.x 示例）

最简配置：放行所有请求

```java
@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests(auth -> auth
                .anyRequest().permitAll() // 所有请求无需认证
            )
            .csrf(csrf -> csrf.disable()); // 禁用 CSRF（如提供 REST API）

        return http.build();
    }
}
```

标准 Web 应用：需要登录 + 表单登录

```java
@Bean
public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    http
        .authorizeHttpRequests(auth -> auth
            .requestMatchers("/public/**", "/login").permitAll()
            .anyRequest().authenticated() // 其他请求需认证
        )
        .formLogin(form -> form
            .loginPage("/login")          // 自定义登录页
            .defaultSuccessUrl("/home")
            .permitAll()
        )
        .logout(logout -> logout
            .logoutSuccessUrl("/login?logout")
            .permitAll()
        );

    return http.build();
}
```

REST API + JWT（无状态）

```java
@Bean
public SecurityFilterChain apiFilterChain(HttpSecurity http) throws Exception {
    http
        .securityMatcher("/api/**") // 只匹配 /api 开头的请求
        .authorizeHttpRequests(auth -> auth
            .requestMatchers("/api/public/**").permitAll()
            .anyRequest().authenticated()
        )
        .csrf(csrf -> csrf.disable())
        .sessionManagement(session -> session
            .sessionCreationPolicy(SessionCreationPolicy.STATELESS) // 无 Session
        )
        .addFilterBefore(jwtAuthenticationFilter(), UsernamePasswordAuthenticationFilter.class);

    return http.build();
}
```

> [!CAUTION]
>
> `.securityMatcher()` 用于限定该 `SecurityFilterChain` 作用的路径范围。

### 旧版 `WebSecurityConfigurerAdapter` 对比

| 特性          | 旧版（已废弃）                      | 新版（`SecurityFilterChain`）    |
| ------------- | ----------------------------------- | -------------------------------- |
| 配置方式      | 继承 `WebSecurityConfigurerAdapter` | 定义 `@Bean SecurityFilterChain` |
| 多链支持      | 困难                                | 天然支持（多个 `@Bean` 方法）    |
| 代码风格      | 命令式（重写方法）                  | 函数式（Lambda 链式调用）        |
| Spring Boot 3 | ❌ 不兼容                            | ✅ 唯一推荐方式                   |

> [!WARNING]
>
> ⚠️ **Spring Security 5.7+ 已废弃 `WebSecurityConfigurerAdapter`**，新项目必须使用 `SecurityFilterChain`。

### 关键方法说明

| 方法                                 | 作用                                                         |
| ------------------------------------ | ------------------------------------------------------------ |
| `authorizeHttpRequests()`            | 配置 URL 权限规则（替代旧版 `authorizeRequests()`）          |
| `securityMatcher()`                  | 指定该 FilterChain 匹配的请求路径（类似旧版 `antMatcher()`） |
| `formLogin()`                        | 启用表单登录                                                 |
| `httpBasic()`                        | 启用 HTTP Basic 认证                                         |
| `csrf()`                             | 配置 CSRF 保护                                               |
| `cors()`                             | 启用 CORS 支持                                               |
| `sessionManagement()`                | 配置 Session 策略（如 STATELESS）                            |
| `addFilterBefore()/addFilterAfter()` | 添加自定义过滤器                                             |

#### authorizeHttpRequests

是 **Spring Security 5.8+（Spring Boot 2.7+ / 3.x）中用于配置 HTTP 请求授权规则的核心方法**，它取代了旧版的 `authorizeRequests()`，采用更清晰、类型安全、函数式的 DSL（领域特定语言）风格。

| 方法                                     | 说明                                  |
| ---------------------------------------- | ------------------------------------- |
| `requestMatchers(String...)`             | 匹配 Ant 风格路径（如 `/api/**`）     |
| `requestMatchers(HttpMethod, String...)` | 按 HTTP 方法 + 路径匹配               |
| `requestMatchers(RequestMatcher...)`     | 自定义匹配逻辑（高级）                |
| `permitAll()`                            | 无需认证即可访问                      |
| `authenticated()`                        | 需要登录（任意用户）                  |
| `hasRole("XXX")`                         | 需要 `ROLE_XXX` 权限                  |
| `hasAnyRole("A", "B")`                   | 拥有任一角色即可                      |
| `hasAuthority("XXX")`                    | 需要精确权限字符串（无 `ROLE_` 前缀） |
| `denyAll()`                              | 拒绝所有访问（调试用）                |
| `access(String spEl)`                    | 使用 SpEL 表达式动态判                |

基础权限控制

```
http.authorizeHttpRequests(auth -> auth
    .requestMatchers("/", "/home", "/about").permitAll()     // 允许所有人访问
    .requestMatchers("/user/**").hasAnyRole("USER", "ADMIN") // USER 或 ADMIN 可访问
    .requestMatchers("/admin/**").hasRole("ADMIN")           // 仅 ADMIN
    .anyRequest().authenticated()                            // 其他所有请求需登录
);
```

放行静态资源 & 开发工具

```
http.authorizeHttpRequests(auth -> auth
    .requestMatchers("/css/**", "/js/**", "/images/**").permitAll()
    .requestMatchers("/webjars/**").permitAll()
    .requestMatchers("/actuator/health").permitAll()
    .requestMatchers("/swagger-ui/**", "/v3/api-docs/**").permitAll()
    .anyRequest().authenticated()
);
```

------

基于 HTTP 方法的细粒度控制

```
http.authorizeHttpRequests(auth -> auth
    .requestMatchers(HttpMethod.GET, "/api/posts").permitAll()
    .requestMatchers(HttpMethod.POST, "/api/posts").hasRole("EDITOR")
    .requestMatchers(HttpMethod.DELETE, "/api/posts/**").hasRole("ADMIN")
);
```

------

自定义权限表达式（SpEL）

```
http.authorizeHttpRequests(auth -> auth
    .requestMatchers("/profile/{userId}")
    .access("@customSecurity.checkUserId(authentication, #userId)")
);
```

配合自定义 Bean：

```
@Component("customSecurity")
public class CustomSecurity {
    public boolean checkUserId(Authentication auth, String userId) {
        return auth.getName().equals(userId);
    }
}
```

#### securityMatcher

`securityMatcher` 是 Spring Security 5.7+（特别是 Spring Boot 2.7+ 和 3.x）中用于限定 `SecurityFilterChain` 作用范围的关键方法。它决定了当前这条安全过滤器链会处理哪些 HTTP 请求。

- 指定当前 `SecurityFilterChain` **只对匹配的请求生效**
- 实现 **多套安全策略共存**（例如：Web 页面用 Session 认证，API 用 JWT）
- 提高性能：不匹配的请求直接跳过该 FilterChain

> [!TIP]
>
>  简单说：**`securityMatcher` 是 `SecurityFilterChain` 的“开关条件”**。

与authorizeHttpRequests 的区别

| 方法                      | 作用层级             | 目的                             |
| ------------------------- | -------------------- | -------------------------------- |
| `securityMatcher()`       | **FilterChain 级别** | 决定“**是否进入这条安全链**”     |
| `authorizeHttpRequests()` | **链内部权限级别**   | 决定“**进入后能否访问具体路径**” |

基本语法

```
http.securityMatcher("/api/**") // 只处理以 /api 开头的请求
    .authorizeHttpRequests(auth -> auth
        .anyRequest().authenticated()
    );
```

传入多个路径或自定义匹配器

```java
// 多路径
http.securityMatcher("/api/**", "/v1/**")
// 或
http.securityMatcher("/api/**")           // 所有子路径
.securityMatcher("/admin/*.html")     // 单层通配
.securityMatcher("/user/{id}")        // 路径变量（实际按 Ant 规则匹配）


// 使用 RequestMatcher（高级）
http.securityMatcher(new OrRequestMatcher(
    new AntPathRequestMatcher("/admin/**"),
    new AntPathRequestMatcher("/manage/**")
))
```

多安全策略(混合应用（Web + REST API）)

```
@Configuration
@EnableWebSecurity
public class MultiSecurityConfig {

    // 🔹 链 1：API 安全（JWT，无状态）
    @Bean
    @Order(1) // 优先级更高（数字越小越先匹配）
    public SecurityFilterChain apiFilterChain(HttpSecurity http) throws Exception {
        http
            .securityMatcher("/api/**") // ← 仅处理 /api 请求
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/public/**").permitAll()
                .anyRequest().authenticated()
            )
            .csrf(csrf -> csrf.disable())
            .sessionManagement(session -> 
                session.sessionCreationPolicy(SessionCreationPolicy.STATELESS)
            )
            .addFilterBefore(jwtFilter(), UsernamePasswordAuthenticationFilter.class);
        return http.build();
    }

    // 🔹 铲 2：Web 页面安全（表单登录，有状态）
    @Bean
    @Order(2)
    public SecurityFilterChain webFilterChain(HttpSecurity http) throws Exception {
        http
            .securityMatcher("/**") // ← 处理所有其他请求（/api 已被上一条链拦截）
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/login", "/register").permitAll()
                .anyRequest().authenticated()
            )
            .formLogin(form -> form
                .loginPage("/login")
                .permitAll()
            );
        return http.build();
    }
}
```

多 `SecurityFilterChain` 示例（混合应用）

```java
@Configuration
@EnableWebSecurity
public class MultiSecurityConfig {

    // 1. Web 页面安全链
    @Bean
    @Order(1) // 优先级更高（数字越小越先匹配）
    public SecurityFilterChain webFilterChain(HttpSecurity http) throws Exception {
        http
            .securityMatcher("/**") // 匹配所有，但会被 api 链先拦截 /api
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/admin/**").hasRole("ADMIN")
                .anyRequest().authenticated()
            )
            .formLogin(withDefaults());
        return http.build();
    }

    // 2. API 安全链（更高优先级）
    @Bean
    @Order(0)
    public SecurityFilterChain apiFilterChain(HttpSecurity http) throws Exception {
        http
            .securityMatcher("/api/**") // 仅处理 /api 请求
            .authorizeHttpRequests(auth -> auth
                .anyRequest().authenticated()
            )
            .csrf(AbstractHttpConfigurer::disable)
            .sessionManagement(session -> 
                session.sessionCreationPolicy(SessionCreationPolicy.STATELESS)
            );
        return http.build();
    }
}
```



### 常用配置技巧

**启用 CORS**

```
@Bean
public CorsConfigurationSource corsConfigurationSource() {
    CorsConfiguration config = new CorsConfiguration();
    config.setAllowedOriginPatterns(List.of("*"));
    config.setAllowedMethods(List.of("*"));
    config.setAllowedHeaders(List.of("*"));
    config.setAllowCredentials(true);
    
    UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
    source.registerCorsConfiguration("/**", config);
    return source;
}

// 在 SecurityFilterChain 中启用
http.cors(cors -> cors.configurationSource(corsConfigurationSource()));
```

**自定义认证失败处理器**

```
http.exceptionHandling(ex -> ex
    .authenticationEntryPoint((req, res, ex) -> {
        res.setStatus(401);
        res.getWriter().write("Unauthorized");
    })
);
```

------

### 常见问题

 `SecurityFilterChain` 没生效

- 忘记加 `@Configuration` 或 `@EnableWebSecurity`
- 多个链未设置 `@Order`，导致匹配顺序不符合预期
- 路径被其他链提前匹配（检查 `.securityMatcher()`）

禁用 Spring Security

```
@SpringBootApplication(exclude = { SecurityAutoConfiguration.class })
public class MyApp { ... }
```

或配置：

```yaml
spring:
  autoconfigure:
    exclude: org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration
```

放行 Swagger / Actuator

```
http.authorizeHttpRequests(auth -> auth
    .requestMatchers("/v3/api-docs/**", "/swagger-ui/**", "/actuator/**").permitAll()
    .anyRequest().authenticated()
);
```

------

### 最佳实践总结

| 建议                                      | 说明                                |
| ----------------------------------------- | ----------------------------------- |
| ✅ 使用 `SecurityFilterChain` 替代旧适配器 | Spring Boot 2.7+ / 3.x 标准         |
| ✅ 多链场景用 `@Order` 控制优先级          | 数字越小优先级越高                  |
| ✅ REST API 禁用 CSRF + STATELESS          | 避免不必要的安全开销                |
| ✅ 敏感路径（如 `/admin`）严格权限控制     | 使用 `hasRole()` / `hasAuthority()` |
| ✅ 显式配置 CORS 而非全局关闭              | 安全与功能兼顾                      |



## PasswordEncoder

`PasswordEncoder` 是 **Spring Security 提供的核心接口**，用于**安全地对用户密码进行编码（哈希）和验证**。它是现代 Web 应用中实现密码安全存储的基石。

### 核心作用

#### **编码（Encode）**

 将用户注册时输入的明文密码（如 `"123456"`）转换为**不可逆的哈希值**（如 `"$2a$10$N9qo8uLOickgx2ZMRZoMy...`），并存入数据库。

#### **验证（Matches）**

 在用户登录时，将用户输入的明文密码与数据库中存储的哈希值进行比对，判断是否匹配。

### 接口定义

```java
public interface PasswordEncoder {
    // 对原始密码进行编码（哈希）
    String encode(CharSequence rawPassword);

    // 验证原始密码是否与编码后的密码匹配
    boolean matches(CharSequence rawPassword, String encodedPassword);
}
```

### 常用实现类

#### 1. `BCryptPasswordEncoder`（最常用）

- 基于 **BCrypt 算法**
- 自动加盐（salt），每次 `encode()` 结果都不同
- 计算较慢，抗暴力破解
- **Spring Boot + Spring Security 默认推荐**

```
@Bean
public PasswordEncoder passwordEncoder() {
    return new BCryptPasswordEncoder(16); // 默认强度 10
}
```

#### 2. `SCryptPasswordEncoder`

- 基于 **SCrypt 算法**
- 不仅计算慢，还消耗大量内存，更抗专用硬件（ASIC）攻击
- 安全性略高于 BCrypt，但配置稍复杂

#### 3. `Pbkdf2PasswordEncoder`

- 基于 **PBKDF2 算法**（NIST 推荐）
- 可配置迭代次数、盐长度等
- 兼容性好，适合需要符合特定合规标准的系统

#### 4.  `NoOpPasswordEncoder`（仅测试用！）

- **不加密**，直接返回明文
- **绝对禁止在生产环境使用！**
- Spring Security 5+ 默认不再允许使用（除非显式指定）

### 工作流程示例

#### 用户注册

```
// 用户输入明文密码
String rawPassword = "mySecret123";

// 编码
String encoded = passwordEncoder.encode(rawPassword);
// 结果示例: "$2a$10$XOPbrlUPQdwdJgxL/UTYmOc3qVxZi7Fv/9Z..."
// 存入数据库
userRepository.save(new User("alice", encoded));
```

#### 用户登录（Spring Security 自动完成）

1. 用户提交用户名 + 明文密码

2. Spring Security 调用你的 `UserDetailsService.loadUserByUsername()`

3. 获取到数据库中的 `encodedPassword`

4. 自动调用：

   ```
   passwordEncoder.matches(rawPasswordInput, encodedPasswordFromDB)
   ```

5. 返回 `true` → 认证成功；`false` → 失败

## UserDetailsService

`UserDetailsService` 是 **Spring Security 中用于加载用户认证信息的核心接口**。它是连接你的用户数据（如数据库、LDAP、远程服务等）与 Spring Security 认证机制的桥梁。

### 核心作用

当用户尝试登录（例如提交用户名/密码）时，Spring Security 会：

1. 调用你实现的 `UserDetailsService.loadUserByUsername(String username)`
2. 从你的数据源（如数据库）中查找该用户
3. 返回一个 `UserDetails` 对象（包含用户名、密码、权限等）
4. Spring Security 自动使用 `PasswordEncoder` 验证密码是否匹配

### 接口定义

```
public interface UserDetailsService {
    UserDetails loadUserByUsername(String username) throws UsernameNotFoundException;
}
```

- **输入**：用户名（或邮箱、手机号等唯一标识）
- **输出**：`UserDetails` 对象（Spring Security 内部使用的用户模型）
- **异常**：如果用户不存在，必须抛出 `UsernameNotFoundException`

### `UserDetails` 接口

`UserDetails` 是 Spring Security 的“用户”标准模型，包含：	

```java
public interface UserDetails extends Serializable {
    Collection<? extends GrantedAuthority> getAuthorities(); // 权限列表
    String getPassword();   // 加密后的密码（从数据库读取）
    String getUsername();   // 用户名
    boolean isAccountNonExpired();     // 账户是否未过期
    boolean isAccountNonLocked();      // 账户是否未锁定
    boolean isCredentialsNonExpired(); // 密码是否未过期
    boolean isEnabled();               // 账户是否启用
}
```

### 快速实现方式

Spring 提供了 `org.springframework.security.core.userdetails.User` 类，可直接使用：

```
UserDetails user = User.builder()
    .username("alice")
    .password(passwordEncoder.encode("123456"))
    .roles("USER", "ADMIN") // 自动转为 "ROLE_USER", "ROLE_ADMIN"
    .build();
```

>  也可以自定义 `UserDetails` 实现类（如添加 `userId`, `email` 等业务字段）。

### 自定义 `UserDetailsService`

步骤 1：创建 Service 实现接口

```java
@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository; // 假设你有 JPA Repository

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        // 1. 从数据库查询用户
        UserEntity user = userRepository.findByUsername(username);
        if (user == null) {
            throw new UsernameNotFoundException("用户不存在: " + username);
        }
        // 2. 构建 UserDetails（密码必须是已加密的！）
        return User.builder()
            .username(user.getUsername())
            .password(user.getPassword()) // 数据库中存储的是 BCrypt 哈希值
            .authorities(user.getRoles().stream()
                .map(role -> new SimpleGrantedAuthority("ROLE_" + role))
                .collect(Collectors.toList()))
            .accountExpired(false)
            .accountLocked(false)
            .credentialsExpired(false)
            .disabled(!user.isEnabled())
            .build();
    }
}
```

步骤 2：确保 `PasswordEncoder` 已配置（通常已自动注入）

```
@Bean
public PasswordEncoder passwordEncoder() {
    return new BCryptPasswordEncoder();
}
```

步骤3：Spring Security 如何使用它

在基于 Java 的安全配置中，你**不需要显式注册 `UserDetailsService`** —— 只要它是一个 `@Service` 或 `@Component`，Spring Security 会自动发现并使用。

但如果需要**显式指定**（例如多数据源），可以：

```java
@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Autowired
    private CustomUserDetailsService userDetailsService;

    @Bean
    public DaoAuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
        authProvider.setUserDetailsService(userDetailsService);
        authProvider.setPasswordEncoder(passwordEncoder());
        return authProvider;
    }

    @Bean
    public AuthenticationManager authenticationManager(
            HttpSecurity http) throws Exception {
        return http.getSharedObject(AuthenticationManagerBuilder.class)
                .authenticationProvider(authenticationProvider())
                .build();
    }
}
```

### 高级用法

#### 自定义 `UserDetails` 添加业务字段

```java
public class CustomUserDetails implements UserDetails {
    private Long id;
    private String email;
    private String username;
    private String password;
    // ... 其他字段

    // 实现 UserDetails 所有方法
    @Override
    public String getUsername() { return username; }
    @Override
    public String getPassword() { return password; }
    // ...
}
```

在 Controller 中获取当前用户信息：

```java
@GetMapping("/profile")
public ResponseEntity<?> profile(@AuthenticationPrincipal CustomUserDetails userDetails) {
    return ResponseEntity.ok(Map.of(
        "id", userDetails.getId(),
        "email", userDetails.getEmail()
    ));
}
```

#### 支持多种登录方式（用户名/邮箱/手机号）

```java
@Override
public UserDetails loadUserByUsername(String loginId) {
    UserEntity user;
    if (loginId.contains("@")) {
        user = userRepository.findByEmail(loginId);
    } else if (loginId.matches("\\d{11}")) {
        user = userRepository.findByPhone(loginId);
    } else {
        user = userRepository.findByUsername(loginId);
    }
    // ... 构建 UserDetails
}
```

### 最佳实践总结

| 建议                                           | 说明                              |
| ---------------------------------------------- | --------------------------------- |
| ✅ 实现 `UserDetailsService` 查询数据库         | 连接业务用户系统                  |
| ✅ 密码字段存储 **BCrypt 哈希值**               | 不要存明文                        |
| ✅ 抛出 `UsernameNotFoundException`             | 用户不存在时必须抛出              |
| ✅ 使用 `@AuthenticationPrincipal` 获取当前用户 | 比 `SecurityContextHolder` 更简洁 |
| ✅ 自定义 `UserDetails` 扩展业务字段            | 避免重复查询数据库                |

### 完整流程

```
用户登录 → 提交 username/password
       ↓
Spring Security 调用 UserDetailsService.loadUserByUsername(username)
       ↓
从 DB/LDAP/... 加载用户 → 返回 UserDetails（含加密密码）
       ↓
调用 PasswordEncoder.matches(rawPassword, userDetails.getPassword())
       ↓
匹配成功 → 认证通过，创建 SecurityContext
匹配失败 → 抛出 BadCredentialsException
```

## AuthenticationManager

`AuthenticationManager` 是 Spring Security 框架中的一个核心接口，用于处理用户的身份认证（Authentication）。它在 Spring Security 的认证流程中扮演着“协调者”的角色，负责调用合适的 `AuthenticationProvider` 来验证用户凭据（如用户名/密码、OAuth2 token 等）。

### 接口定义

```
public interface AuthenticationManager {
    Authentication authenticate(Authentication authentication)
        throws AuthenticationException;
}
```

authenticate() 方法：

- 输入：一个未认证的 `Authentication` 对象（通常包含用户名、密码等凭据）。
- 输出：一个已认证的 `Authentication` 对象（包含用户详细信息、权限、是否认证成功等）。
- 异常：若认证失败，抛出 `AuthenticationException` 的子类（如 `BadCredentialsException`、`DisabledException` 等）。

### 核心作用详解

##### **统一入口**

所有需要认证的请求（如表单登录、Basic 认证、JWT 校验等）最终都会被封装为 Authentication 对象（如 UsernamePasswordAuthenticationToken），并提交给 AuthenticationManager 处理。它是认证流程的起点，负责协调后续的认证逻辑。

##### **委托给认证提供者（AuthenticationProvider）**

AuthenticationManager 本身不直接执行认证逻辑，而是通过委托模式将认证任务交给一组 AuthenticationProvider 实现类处理。每个 AuthenticationProvider 专注于一种或多种认证方式：

- DaoAuthenticationProvider：基于数据库/内存用户的认证（最常用）。
- JwtAuthenticationProvider：基于 JWT 令牌的认证。
- LdapAuthenticationProvider：基于 LDAP 服务器的认证。

核心逻辑：AuthenticationManager 遍历注册的 AuthenticationProvider，找到能够处理当前 Authentication 对象的 provider（通过 supports(Class<?> authentication) 方法判断），并调用其 authenticate(Authentication authentication) 方法执行认证。

处理认证结果
AuthenticationProvider 执行认证后，会返回一个完整的 Authentication 对象（表示认证成功）或抛出 AuthenticationException（表示认证失败）。AuthenticationManager 负责：

- 成功场景：将认证结果存入安全上下文（SecurityContext），供后续组件（如控制器、业务逻辑）使用。
- 失败场景：传播异常，触发相应的失败处理逻辑（如返回 401 状态码、记录日志等）。

### 默认实现：ProviderManager

Spring Security 默认使用 `ProviderManager` 作为 `AuthenticationManager` 的实现。

- 内部维护一个 `List<AuthenticationProvider>`。
- 依次尝试每个 `AuthenticationProvider`，直到有一个能处理当前 `Authentication` 类型并成功认证。
- 如果所有 Provider 都不能处理或都失败，则抛出异常。
- 支持设置父级 `AuthenticationManager`（用于 fallback）。

```java
public class ProviderManager implements AuthenticationManager {
    private List<AuthenticationProvider> providers;
    private AuthenticationManager parent;
    
    @Override
    public Authentication authenticate(Authentication authentication) {
        for (AuthenticationProvider provider : providers) {
            if (provider.supports(authentication.getClass())) {
                try {
                    Authentication result = provider.authenticate(authentication);
                    if (result != null) {
                        return result; // 认证成功
                    }
                } catch (AuthenticationException e) {
                    // 处理异常或继续尝试下一个 Provider
                }
            }
        }
        // 若无 Provider 能处理，尝试父级 Manager
        if (parent != null) {
            return parent.authenticate(authentication);
        }
        throw new ProviderNotFoundException("...");
    }
}
```

### AuthenticationProvider

`AuthenticationProvider` 是实际执行认证逻辑的组件。常见实现包括：

| Provider                                        | 用途                                              |
| ----------------------------------------------- | ------------------------------------------------- |
| `DaoAuthenticationProvider`                     | 基于数据库或 UserDetailsService 的用户名/密码认证 |
| `JwtAuthenticationProvider`                     | 自定义 JWT Token 认证（需自行实现）               |
| `OAuth2AuthorizationCodeAuthenticationProvider` | OAuth2 授权码模式                                 |
| `LdapAuthenticationProvider`                    | LDAP 认证                                         |

每个 Provider 必须实现：

```
1public interface AuthenticationProvider {
2    Authentication authenticate(Authentication authentication) throws AuthenticationException;
3    boolean supports(Class<?> authentication);
4}
```

### 典型认证流程（以用户名/密码为例）

1. 用户提交用户名和密码（如通过登录表单）。
2. `UsernamePasswordAuthenticationToken` 被创建（未认证状态）。
3. 调用 `AuthenticationManager.authenticate(token)`。
4. `ProviderManager` 将请求委托给支持 `UsernamePasswordAuthenticationToken` 的 `DaoAuthenticationProvider`。
5. DaoAuthenticationProvider：
   - 通过 `UserDetailsService` 加载用户详情（`UserDetails`）。
   - 使用 `PasswordEncoder` 比较密码。
   - 成功则返回已认证的 `UsernamePasswordAuthenticationToken`（含 `UserDetails` 和权限）。
6. 认证结果存入 `SecurityContext`，后续请求可访问。

### 自定义 AuthenticationManager

#### 方式 1：通过配置类（推荐）

```
@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public AuthenticationManager authenticationManager(
            AuthenticationConfiguration config) throws Exception {
        return config.getAuthenticationManager();
    }

    @Bean
    public UserDetailsService userDetailsService() {
        // 自定义 UserDetailsService
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
```

> 注意：Spring Boot 2.7+ 不再自动暴露 `AuthenticationManager` Bean，需手动声明。

#### 方式 2：手动构建 ProviderManager

```
@Bean
public AuthenticationManager customAuthenticationManager() {
    DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
    provider.setUserDetailsService(userDetailsService());
    provider.setPasswordEncoder(passwordEncoder());

    ProviderManager manager = new ProviderManager(provider);
    return manager;
}
```



### 使用示例

#### 典型使用场景（账密）

第 1 步：确保 `AuthenticationManager` 可被注入

```java
@Configuration
@EnableWebSecurity
public class SecurityConfig {

    // ✅ 关键：暴露 AuthenticationManager Bean
    @Bean
    public AuthenticationManager authenticationManager(
            AuthenticationConfiguration config) throws Exception {
        return config.getAuthenticationManager();
    }

    // 其他配置：UserDetailsService, PasswordEncoder 等
    @Bean
    public UserDetailsService userDetailsService() {
        // 实现 loadUserByUsername
        return username -> {
            // 从数据库查用户
            if ("admin".equals(username)) {
                return User.withUsername("admin")
                          .password(passwordEncoder().encode("123456"))
                          .roles("USER")
                          .build();
            }
            throw new UsernameNotFoundException("User not found");
        };
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
```

第 2 步：在 Controller / Service 中注入并调用

```java
@RestController
public class AuthController {

    @Autowired
    private AuthenticationManager authenticationManager; // 注入

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {
        try {
            // 1. 创建未认证的 Authentication 对象
            UsernamePasswordAuthenticationToken token =
                new UsernamePasswordAuthenticationToken(
                    request.getUsername(),
                    request.getPassword()
                );

            // 2. 调用 authenticate 触发认证
            Authentication auth = authenticationManager.authenticate(token);

            // 3. 认证成功 → 生成 Token / 返回用户信息
            String jwt = generateJwt(auth); // 你的 JWT 生成逻辑
            return ResponseEntity.ok(new LoginResponse(jwt));

        } catch (BadCredentialsException e) {
            return ResponseEntity.status(401).body("用户名或密码错误");
        } catch (DisabledException e) {
            return ResponseEntity.status(403).body("账户已被禁用");
        } catch (LockedException e) {
            return ResponseEntity.status(403).body("账户已被锁定");
        }
    }

    private String generateJwt(Authentication auth) {
        // 从 auth.getPrincipal() 获取用户信息生成 JWT
        return "your-jwt-token";
    }
}
```

第 3 步：处理认证结果和异常

| 异常类型                    | 含义       | HTTP 状态建议               |
| --------------------------- | ---------- | --------------------------- |
| `BadCredentialsException`   | 密码错误   | 401 Unauthorized            |
| `UsernameNotFoundException` | 用户不存在 | 401（避免暴露用户是否存在） |
| `DisabledException`         | 账户被禁用 | 403 Forbidden               |
| `LockedException`           | 账户被锁定 | 403                         |
| `AccountExpiredException`   | 账户过期   | 403                         |

> 🔒 安全提示：**不要区分“用户不存在”和“密码错误”**，统一返回“用户名或密码错误”，防止暴力探测用户。

#### 自定义认证类型（如短信验证码）

自定义 `AuthenticationToken`

```java
public class SmsCodeAuthenticationToken extends AbstractAuthenticationToken {
    private final Object principal; // 手机号
    private Object credentials;     // 验证码

    public SmsCodeAuthenticationToken(String mobile, String code) {
        super(null);
        this.principal = mobile;
        this.credentials = code;
        setAuthenticated(false);
    }

    public SmsCodeAuthenticationToken(Object principal, Object credentials, Collection<? extends GrantedAuthority> authorities) {
        super(authorities);
        this.principal = principal;
        this.credentials = credentials;
        super.setAuthenticated(true);
    }

    @Override
    public Object getCredentials() { return credentials; }
    @Override
    public Object getPrincipal() { return principal; }
}
```

自定义 `AuthenticationProvider`

```java
@Component
public class SmsCodeAuthenticationProvider implements AuthenticationProvider {

    @Override
    public Authentication authenticate(Authentication authentication) {
        SmsCodeAuthenticationToken token = (SmsCodeAuthenticationToken) authentication;
        String mobile = (String) token.getPrincipal();
        String code = (String) token.getCredentials();

        // 1. 验证验证码是否正确（从 Redis 或 DB 查询）
        if (!isValidSmsCode(mobile, code)) {
            throw new BadCredentialsException("验证码错误");
        }

        // 2. 加载用户权限
        UserDetails user = loadUserByMobile(mobile);

        // 3. 返回已认证的 Token
        return new SmsCodeAuthenticationToken(
            user.getUsername(),
            code,
            user.getAuthorities()
        );
    }

    @Override
    public boolean supports(Class<?> authentication) {
        return SmsCodeAuthenticationToken.class.isAssignableFrom(authentication);
    }

    private boolean isValidSmsCode(String mobile, String code) {
        // 实现验证逻辑
        return true;
    }

    private UserDetails loadUserByMobile(String mobile) {
        // 根据手机号查用户
        return User.withUsername(mobile).roles("USER").build();
    }
}
```

 注册自定义 Provider

```java
@Bean
public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
    // 获取默认 ProviderManager
    ProviderManager providerManager = (ProviderManager) config.getAuthenticationManager();
    
    // 添加自定义 Provider（注意顺序！）
    List<AuthenticationProvider> providers = new ArrayList<>(providerManager.getProviders());
    providers.add(0, smsCodeAuthenticationProvider()); // 插到最前面
    
    return new ProviderManager(providers);
}
```

在 Controller 中使用

```java
@PostMapping("/sms-login")
public ResponseEntity<?> smsLogin(@RequestBody SmsLoginRequest req) {
    SmsCodeAuthenticationToken token = 
        new SmsCodeAuthenticationToken(req.getMobile(), req.getCode());
    
    Authentication auth = authenticationManager.authenticate(token);
    // 生成 Token...
}
```



## SecurityContext

在 **Spring Security** 中，`SecurityContext` 是一个核心概念，用于存储当前认证用户（即“主体”，Principal）的安全上下文信息，主要包括用户的认证信息（`Authentication` 对象）。它是 Spring Security 实现“当前用户是谁”、“用户拥有哪些权限”等功能的基础。

### SecurityContext 的作用

`SecurityContext` 的主要职责是：

- 存储当前线程中用户的认证信息（`Authentication`）。
- 在整个请求生命周期中提供对当前用户身份和权限的访问。
- 支持多线程、异步调用等场景下的安全上下文传递（通过 `SecurityContextHolder`）。

### 核心组件关系

```
SecurityContextHolder
        ↓（持有）
SecurityContext
        ↓（包含）
Authentication
        ↓（包含）
Principal（通常是 UserDetails 或 String）、Credentials（如密码）、Authorities（权限列表）
```

### SecurityContext 接口定义

```
public interface SecurityContext extends Serializable {
    Authentication getAuthentication();
    void setAuthentication(Authentication authentication);
}
```

最常用的实现类是 `SecurityContextImpl`。

### SecurityContextHolder

`SecurityContextHolder` 是一个工具类，用于管理 `SecurityContext` 的存储策略。它使用 **ThreadLocal** 默认存储上下文，确保每个线程有独立的安全上下文。



## Java JWT

JJWT（Java JWT）是一个用于在 Java 应用中创建和验证 JSON Web Token（JWT）的开源库。它遵循 RFC 7519 标准，提供了简洁、安全且易于使用的 API。

### 什么是 JWT

**JSON Web Token (JWT)** 是一种开放标准（RFC 7519），用于在网络应用环境间安全地传输信息。JWT 通常用于身份认证（Authentication）和信息交换（Information Exchange）。

一个典型的 JWT 由三部分组成，用点（`.`）分隔：

```
xxxxx.yyyyy.zzzzz
```

- **Header（头部）**：描述令牌类型和签名算法（如 HS256、RS256）。
- **Payload（载荷）**：包含声明（claims），如用户 ID、角色、过期时间等。
- **Signature（签名）**：用于验证消息未被篡改，由 Header + Payload + 密钥生成。

### JJWT 简介

JJWT 是 Java 平台最流行的 JWT 库之一，由 Auth0 团队维护（早期由 Stormpath 开发）。
 GitHub 地址：https://github.com/jwtk/jjwt

特性：

- 支持 HS256/384/512、RS256/384/512、ES256/384/512、PS256/384/512 等签名算法。
- 自动处理 Base64Url 编码/解码。
- 提供 Builder/Parser 模式，代码简洁。
- 内置对过期、未生效、签发者等 claims 的校验。
- 支持自定义 claims。

### 快速入门（Maven）

添加依赖（以 JJWT 0.13.x 为例）

```xml
<!-- API -->
<dependency>
    <groupId>io.jsonwebtoken</groupId>
    <artifactId>jjwt-api</artifactId>
    <version>0.13.0</version>
</dependency>

<!-- 实现（运行时） -->
<dependency>
    <groupId>io.jsonwebtoken</groupId>
    <artifactId>jjwt-impl</artifactId>
    <version>0.13.0</version>
    <scope>runtime</scope>
</dependency>

<!-- JSON 序列化（选一个） -->
<dependency>
    <groupId>io.jsonwebtoken</groupId>
    <artifactId>jjwt-jackson</artifactId> <!-- 使用 Jackson -->
    <version>0.13.0</version>
    <scope>runtime</scope>
</dependency>

<!-- 如果用 Gson，替换为 jjwt-gson -->
```

准备安全密钥

```java
import io.jsonwebtoken.security.Keys;
import javax.crypto.SecretKey;

// 自动生成符合 HS256 要求的安全密钥（256位）
SecretKey key = Keys.secretKeyFor(SignatureAlgorithm.HS256);

// 或从 Base64 字符串恢复（用于生产环境固定密钥）
    // String base64Key = "your-base64-encoded-32-byte-key-here";
// SecretKey key = Keys.hmacShaKeyFor(Decoders.BASE64.decode(base64Key));
```

生成 JWT（签发 Token）

```java
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import java.util.Date;

String subject = "user123";

String jwt = Jwts.builder()
    .subject(subject)                          // 替代 .setSubject()
    .issuedAt(new Date())                      // 替代 .setIssuedAt()
    .expiration(new Date(System.currentTimeMillis() + 3600_000)) // 替代 .setExpiration()
    .claim("role", "admin")                    // 自定义 claim 不变
    .signWith(key)                             // ✅ 关键：只传 key，算法自动推断！
    .compact();                                // 生成最终 token 字符串
```

- 方法名简化：`.subject()` 而不是 `.setSubject()`
- **`.signWith(key)`**：不再需要显式指定 `SignatureAlgorithm.HS256`，JJWT 会根据 `key` 类型自动选择合适算法。
- 如果你用的是 RSA 密钥（`PrivateKey`），同样只需 `.signWith(privateKey)`

| 方法                   | 对应 JWT 部分        | 类型         | 说明               |
| ---------------------- | -------------------- | ------------ | ------------------ |
| `.subject(...)`        | Payload → `sub`      | 标准 claim   | 主体（如用户ID）   |
| `.issuedAt(...)`       | Payload → `iat`      | 标准 claim   | 签发时间           |
| `.expiration(...)`     | Payload → `exp`      | 标准 claim   | 过期时间           |
| `.claim("key", value)` | Payload → 自定义字段 | 自定义 claim | 业务数据           |
| `.signWith(...)`       | Signature            | 签名         | 保证完整性与真实性 |

------

解析与验证 JWT

```java
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;

try {
    Jws<Claims> jws = Jwts.parser()
        .verifyWith(key)                       // ✅ 新版：使用 .verifyWith()
        .build()
        .parseSignedClaims(jwt);               // ✅ 新方法：parseSignedClaims()

    Claims claims = jws.getPayload();          // 获取 payload（旧版叫 getBody()）

    System.out.println("Subject: " + claims.getSubject());
    System.out.println("Role: " + claims.get("role", String.class));
    System.out.println("Expiration: " + claims.getExpiration());

} catch (io.jsonwebtoken.security.SignatureException e) {
    System.err.println("无效签名");
} catch (io.jsonwebtoken.ExpiredJwtException e) {
    System.err.println("Token 已过期");
} catch (io.jsonwebtoken.MalformedJwtException e) {
    System.err.println("Token 格式错误");
}
```

🔑 关键变化：

- 使用 **`.verifyWith(key)`** 替代旧版 `.setSigningKey()`
- 使用 **`.parseSignedClaims()`** 替代 `.parseClaimsJws()`
- 获取 payload 用 **`.getPayload()`**（语义更清晰）

### 使用固定字符串密钥

如果你有一个固定的密钥字符串（如配置文件中的 `jwt.secret=myVeryLongSecretKey...`），**必须确保它是 ≥32 字节的 Base64 编码字符串**：

```java
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;

String base64EncodedSecret = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890ab"; // 32字节以上 Base64
SecretKey key = Keys.hmacShaKeyFor(Decoders.BASE64.decode(base64EncodedSecret));
```

### 非对称加密示例（RS256）

```java
// 生成 RSA 密钥对（仅演示，实际应使用 openssl 或 KeyPairGenerator）
KeyPair keyPair = Keys.keyPairFor(SignatureAlgorithm.RS256);
PrivateKey privateKey = keyPair.getPrivate();
PublicKey publicKey = keyPair.getPublic();

// 签发（用私钥）
String jwt = Jwts.builder()
    .subject("user")
    .signWith(privateKey)
    .compact();

// 验证（用公钥）
Jws<Claims> verified = Jwts.parser()
    .verifyWith(publicKey)
    .build()
    .parseSignedClaims(jwt);
```

### 
