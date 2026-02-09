# MyBatis

MyBatis 是一个优秀的持久层框架，它支持自定义 SQL、存储过程以及高级映射。MyBatis 避免了几乎所有的 JDBC 代码和手动设置参数以及获取结果集的过程。MyBatis 可以使用简单的 XML 或注解来配置和映射原生信息，将接口和 Java 的 POJOs（Plain Old Java Objects）映射成数据库中的记录。

## MyBatis 核心组件

**SqlSessionFactoryBuilder**

- 用于构建 `SqlSessionFactory`。
- 通常只在应用启动时使用一次。

**SqlSessionFactory**

每个 MyBatis 应用程序都围绕着一个 SqlSessionFactory 实例。可以使用 SqlSessionFactoryBuilder 获取 SqlSessionFactory 实例。SqlSessionFactoryBuilder 可以从 XML 配置文件构建 SqlSessionFactory 实例，也可以从自定义的 Configuration 类实例构建 SqlSessionFactory 实例。

- 创建 `SqlSession` 的工厂。
- 是线程安全的，可以被多个 DAO 共享。
- 通常以单例形式存在。

**SqlSession**

- 提供执行 SQL 命令所需的所有方法（如 select、insert、update、delete）。
- 线程不安全，每次数据库交互都应使用新的 SqlSession。
- 使用后需关闭（通常配合 try-with-resources 或 Spring 管理）。

**Mapper 接口 + XML/注解**

- Mapper 接口定义操作方法。
- 对应的 XML 文件或注解提供 SQL 语句。
- MyBatis 通过动态代理自动实现接口。

## 基本使用流程

### 引入依赖

```xml
<dependency>
  <groupId>org.mybatis</groupId>
  <artifactId>mybatis</artifactId>
  <version>3.5.13</version>
</dependency>
<!-- 数据库驱动，如 MySQL -->
<dependency>
  <groupId>mysql</groupId>
  <artifactId>mysql-connector-java</artifactId>
  <version>8.0.33</version>
</dependency>
```

### 配置文件

编写 MyBatis 配置文件（resources/mybatis-config.xml）

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE configuration
        PUBLIC "-//mybatis.org//DTD Config 3.0//EN"
        "https://mybatis.org/dtd/mybatis-3-config.dtd">
    <configuration>
        <!-- 环境配置 -->
        <environments default="development">
            <!-- 开发环境 -->
            <environment id="development">
                <transactionManager type="JDBC"/>
                <!-- 数据源配置 -->
                <dataSource type="POOLED">
                    <!-- 数据库驱动 -->
                    <property name="driver" value="com.mysql.cj.jdbc.Driver"/>
                    <!-- 数据库连接URL -->
                    <property name="url" value="jdbc:mysql://localhost:3306/mybatis?useSSL=false&amp;serverTimezone=UTC"/>
                    <!-- 数据库用户名 -->
                    <property name="username" value="root"/>
                    <!-- 数据库密码 -->
                    <property name="password" value="Suiyueran373."/>
                </dataSource>
            </environment>
        </environments>
        <mappers>
            <mapper resource="com/hanweb/mapper/UserMapper.xml"/>
        </mappers>
    </configuration>
```

#### `<properties>`配置

引入外部 `.properties` 文件（如 `db.properties`），避免硬编码。

```properties
driver=com.mysql.cj.jdbc.Driver
url=jdbc:mysql://localhost:3306/mydb?useSSL=false&serverTimezone=UTC
username=root
password=123456
```

引入：

```xml
 <!-- 引入外部属性文件（如数据库配置） -->
  <properties resource="db.properties"/>
```

#### `<typeAliases>`配置

**作用**：为实体类设置简短别名，避免在 XML 中写全限定类名。

```xml
<!-- 方式1：单个别名 -->
<typeAlias type="com.example.entity.User" alias="User"/>

<!-- 方式2：批量扫描包（推荐） -->
<typeAliases>
  <package name="com.example.entity"/>
</typeAliases>
```

之后在 XML 中可以直接写 `type="User"` 而非全限定类名。

- MyBatis 会自动将 `User` 类注册为别名 `user`，在Mybatis3.2 之后可以使用大写`User`。
- 也可用 `@Alias("User")` 注解自定义。

```xml
<!-- 结果映射 -->
    <resultMap id="UserResultMap" type="User">
        <id property="id" column="id"/>
        <result property="name" column="name"/>
        <result property="email" column="email"/>
        <result property="age" column="age"/>
        <result property="createTime" column="create_time"/>
        <result property="updateTime" column="update_time"/>
    </resultMap>
    
    <!-- 插入用户 -->
    <insert id="insert" parameterType="User" useGeneratedKeys="true" keyProperty="id">
        INSERT INTO user(name, email, age, create_time, update_time)
        VALUES(#{name}, #{email}, #{age}, #{createTime}, #{updateTime})
    </insert>
```



#### `<settings>`（常用配置）

| 配置项                     | 推荐值                     | 说明                                               |
| -------------------------- | -------------------------- | -------------------------------------------------- |
| `mapUnderscoreToCamelCase` | `true`                     | 自动将 `user_name` 映射到 `userName`               |
| `logImpl`                  | `SLF4J` / `STDOUT_LOGGING` | 日志输出方式                                       |
| `lazyLoadingEnabled`       | `true`                     | 开启延迟加载（配合 `aggressiveLazyLoading=false`） |
| `cacheEnabled`             | `true`                     | 开启二级缓存（需在 Mapper 中显式启用）             |
| `useGeneratedKeys`         | `true`                     | 支持数据库自增主键回填                             |

> [!NOTE]
>
> **提示**：不要盲目开启所有设置，按需配置。

MyBatis 的 `<plugins>`（插件）机制是其**最强大、最灵活的扩展点之一**，允许你在 **SQL 执行的关键环节**（如参数处理、SQL 生成、结果映射等）**拦截并修改默认行为**。



### 创建数据库

```sql
-- 创建用户表
CREATE TABLE IF NOT EXISTS `user` (
    `id` BIGINT AUTO_INCREMENT PRIMARY KEY COMMENT '用户ID',
    `name` VARCHAR(50) NOT NULL COMMENT '用户名',
    `email` VARCHAR(100) NOT NULL COMMENT '用户邮箱',
    `age` INT DEFAULT 0 COMMENT '用户年龄',
    `create_time` DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    `update_time` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
    UNIQUE KEY `uk_email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='用户表';
```

### 编写实体类

#### 实体类

**实体类（Entity Class）** 是用于映射数据库表记录的 Java 类，也称为 **POJO（Plain Old Java Object）**。MyBatis 通过反射机制将查询结果自动映射到这些实体类的实例中，或将实体类对象的数据插入/更新到数据库。

#### 核心作用

- **ORM 映射载体**：将数据库表的一行记录映射为一个 Java 对象。
- **业务数据封装**：作为数据传输对象（DTO）或领域模型在业务层传递。
- **简化开发**：避免手动从 `ResultSet` 中取值，提高开发效率。

#### 基本要求

| 要求                               | 说明                                                         |
| ---------------------------------- | ------------------------------------------------------------ |
| ✅ **无参构造函数**                 | MyBatis 通过反射创建对象，必须有默认构造方法（即使你写了有参构造，也要保留无参）。 |
| ✅ **属性（字段）与表列对应**       | 字段名建议与数据库列名一致，或通过 `@Results` / `resultMap` 显式映射。 |
| ✅ **提供 getter/setter 方法**      | MyBatis 通过 setter 注入值，通过 getter 读取值（或使用字段访问，但不推荐）。 |
| ✅ **包路径清晰**                   | 如 `com.example.entity.User`，便于在 MyBatis 配置中批量注册别名。 |
| ✅ **避免使用基本类型（如 `int`）** | 推荐使用包装类（如 `Integer`），防止数据库 `NULL` 值导致异常。 |

#### 编写实体类

根据创建数据提供的SQL，对应的实体类如下：

```java
package com.hanweb.model;

import java.time.LocalDateTime;

public class User {
    private Long id;
    private String name;
    private String email;
    private Integer age;
    private LocalDateTime createTime;
    private LocalDateTime updateTime;
    // Constructors
    public User() {}
    public User(String name, String email, Integer age) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.createTime = LocalDateTime.now();
        this.updateTime = LocalDateTime.now();
    }
    // Getters and Setters
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public LocalDateTime getCreateTime() {
        return createTime;
    }

    public void setCreateTime(LocalDateTime createTime) {
        this.createTime = createTime;
    }

    public LocalDateTime getUpdateTime() {
        return updateTime;
    }

    public void setUpdateTime(LocalDateTime updateTime) {
        this.updateTime = updateTime;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", age=" + age +
                ", createTime=" + createTime +
                ", updateTime=" + updateTime +
                '}';
    }
}
```

#### 字段名与列名不一致的处理

如果数据库列是 `user_name`，而 Java 属性是 `userName`（驼峰），有以下几种映射方式：

**方式 1：开启 MyBatis 全局驼峰映射（推荐）**

在 `mybatis-config.xml` 中配置：

```
<settings>
  <setting name="mapUnderscoreToCamelCase" value="true"/>
</settings>
```

> 这样 `user_name` 会自动映射到 `userName`。

**方式 2：在 Mapper XML 中使用 `<resultMap>`**

```
<resultMap id="UserResultMap" type="com.example.entity.User">
  <id property="id" column="id"/>
  <result property="userName" column="user_name"/>
  <result property="email" column="email"/>
  <result property="age" column="age"/>
  <result property="isActive" column="is_active"/>
</resultMap>

<select id="selectUserById" resultMap="UserResultMap">
  SELECT id, user_name, email, age, is_active FROM user WHERE id = #{id}
</select>
```

**方式 3：使用注解（适用于简单场景）**

```
@Select("SELECT id, user_name AS userName, email, age, is_active AS isActive FROM user WHERE id = #{id}")
@Results({
  @Result(property = "userName", column = "user_name"),
  @Result(property = "isActive", column = "is_active")
})
User selectUserById(Long id);
```

------

#### 实体类与 MyBatis 配置的关联	

### 映射器

在 MyBatis 中，**Mapper（映射器）** 是连接 Java 接口与 SQL 语句的核心组件。它通过 **接口 + XML 文件** 或 **接口 + 注解** 的方式，将数据库操作抽象为 Java 方法调用，实现“面向接口编程”的持久层设计。

#### Mapper 的核心概念

| 组件                      | 说明                                                         |
| ------------------------- | ------------------------------------------------------------ |
| **Mapper 接口**           | 定义数据库操作方法的 Java 接口（如 `UserMapper`）            |
| **Mapper XML 文件**       | 包含 SQL 语句和结果映射规则的 XML 配置文件                   |
| **命名空间（namespace）** | XML 中的 `namespace` 必须与 Mapper 接口的全限定类名一致      |
| **方法 ID**               | XML 中的 `<select>`, `<insert>` 等标签的 `id` 必须与接口方法名一致 |

#### Mapper 使用方式

##### XML 映射（推荐用于复杂 SQL）

1. 定义 Mapper 接口

```java
package com.example.mapper;

import com.example.model.User;
import java.util.List;

public interface UserMapper {
    User selectUserById(Long id);
    List<User> selectAllUsers();
    void insertUser(User user);
    int updateUser(User user);
    int deleteUser(Long id);
}
```

2. 编写对应的 XML 文件（`UserMapper.xml`）

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper
  PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
  "https://mybatis.org/dtd/mybatis-3-mapper.dtd">

<!-- namespace 必须是接口的全限定名 -->
<mapper namespace="com.example.mapper.UserMapper">

  <!-- 查询单个用户 -->
  <select id="selectUserById" resultType="com.example.model.User" parameterType="long">
    SELECT * FROM users WHERE id = #{id}
  </select>

  <!-- 查询所有用户 -->
  <select id="selectAllUsers" resultType="User">
    SELECT * FROM users
  </select>

  <!-- 插入用户 -->
  <insert id="insertUser" parameterType="User">
    INSERT INTO users(name, age) VALUES(#{name}, #{age})
  </insert>

  <!-- 更新用户 -->
  <update id="updateUser" parameterType="User">
    UPDATE users SET name = #{name}, age = #{age} WHERE id = #{id}
  </update>

  <!-- 删除用户 -->
  <delete id="deleteUser" parameterType="long">
    DELETE FROM users WHERE id = #{id}
  </delete>

</mapper>
```

> `resultType="User"` 能简写，前提是 MyBatis 配置了 typeAliases（见下文）
> `parameterType` 可省略，MyBatis 能自动推断

3. 在 MyBatis 主配置中注册 Mapper

```
<!-- mybatis-config.xml -->
<mappers>
  <mapper resource="mapper/UserMapper.xml"/>
  <!-- 或使用 class 方式（需 XML 与接口同包同名） -->
  <!-- <mapper class="com.example.mapper.UserMapper"/> -->
</mappers>
```

##### 注解映射（适合简单 SQL）

直接在接口方法上使用 MyBatis 注解：

```java
public interface UserMapper {

    @Select("SELECT * FROM users WHERE id = #{id}")
    User selectUserById(Long id);

    @Insert("INSERT INTO users(name, age) VALUES(#{name}, #{age})")
    void insertUser(User user);

    @Update("UPDATE users SET name = #{name}, age = #{age} WHERE id = #{id}")
    int updateUser(User user);

    @Delete("DELETE FROM users WHERE id = #{id}")
    int deleteUser(Long id);

    // 复杂结果映射仍需 @Results
    @Select("SELECT user_id, user_name FROM users WHERE id = #{id}")
    @Results({
        @Result(property = "id", column = "user_id"),
        @Result(property = "name", column = "user_name")
    })
    User selectUserWithAlias(Long id);
}
```

> ⚠️ 注解方式不支持动态 SQL（如 `<if>`, `<foreach>`），因此**复杂查询仍推荐 XML**。

#### Mapper 的注册方式

MyBatis 提供多种注册 Mapper 的方式：

| 方式                     | 配置示例                                          | 说明                                                         |
| ------------------------ | ------------------------------------------------- | ------------------------------------------------------------ |
| **resource（XML 路径）** | `<mapper resource="mapper/UserMapper.xml"/>`      | 最常用                                                       |
| **class（接口类）**      | `<mapper class="com.example.mapper.UserMapper"/>` | 要求 XML 与接口同包同名（如 `UserMapper.java` ↔ `UserMapper.xml`） |
| **package（自动扫描）**  | `<package name="com.example.mapper"/>`            | 自动注册该包下所有 Mapper 接口（需配合 classpath 下的 XML 或注解） |
| **url（网络/绝对路径）** | `<mapper url="file:///.../UserMapper.xml"/>`      | 少用                                                         |

> ✅ 推荐：开发中使用 `<package>` + 接口与 XML 同名同包，结构清晰。

#### Mapper 方法参数传递详解

**单个参数**

```
User selectById(Long id);
```

XML 中直接使用 `#{id}`。

**多个参数**

```
User selectByNameAndAge(@Param("name") String name, @Param("age") Integer age);
```

```
<select id="selectByNameAndAge" resultType="User">
  SELECT * FROM users WHERE name = #{name} AND age = #{age}
</select>
```

**传入对象**（POJO）

```
void insertUser(User user);
```

XML 中直接使用属性名：`#{name}`, `#{age}`。

**传入 Map**

```
List<User> selectByMap(Map<String, Object> params);
```

```
<select id="selectByMap" resultType="User">
  SELECT * FROM users
  WHERE name = #{name} AND age > #{minAge}
</select>
```

**传入 List / Array（用于批量操作）**

```
List<User> selectByIds(List<Long> ids);
```

```
<select id="selectByIds" resultType="User">
  SELECT * FROM users WHERE id IN
  <foreach collection="list" item="id" open="(" separator="," close=")">
    #{id}
  </foreach>
</select>
```

> 🔸 `collection="list"`：当参数是 List 时默认 key 为 `list`；若是数组则为 `array`。

------

#### Mapper 返回值处理

| 返回类型                    | 说明                                          |
| --------------------------- | --------------------------------------------- |
| `T`（如 User）              | 查询单条记录，无结果返回 `null`               |
| `List<T>`                   | 查询多条记录，无结果返回空集合（非 null）     |
| `int` / `Integer`           | 用于 insert/update/delete，返回影响行数       |
| `void`                      | 忽略返回值（不推荐，建议用 int 判断是否成功） |
| `Map<String, Object>`       | 返回单行数据，列名为 key                      |
| `List<Map<String, Object>>` | 返回多行数据                                  |

## spring boot 集成

MyBatis 与 Spring Boot 的集成非常简洁高效，官方提供了 **`mybatis-spring-boot-starter`** 自动配置模块，极大简化了传统 XML 配置方式。下面从零开始，详细讲解如何在 Spring Boot 项目中集成并使用 MyBatis。

### 添加依赖（Maven）

在 `pom.xml` 中添加以下依赖：

```
<!-- Spring Boot Web（可选，用于测试） -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
</dependency>

<!-- MyBatis Starter -->
<dependency>
    <groupId>org.mybatis.spring.boot</groupId>
    <artifactId>mybatis-spring-boot-starter</artifactId>
    <version>3.0.3</version> <!-- 适配 Spring Boot 3.x -->
</dependency>

<!-- 数据库驱动（以 MySQL 为例） -->
<dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
    <scope>runtime</scope>
</dependency>

<!-- Druid 连接池（可选但推荐） -->
<dependency>
    <groupId>com.alibaba</groupId>
    <artifactId>druid-spring-boot-starter</artifactId>
    <version>1.2.23</version>
</dependency>
```

> ✅ 注意：
>
> - 若使用 **Spring Boot 2.x**，MyBatis Starter 版本用 `2.3.1`；
> - 若使用 **Spring Boot 3.x**（基于 Jakarta EE 9+），必须使用 **MyBatis 3.0+**（包名从 `javax.*` → `jakarta.*`）。

### 配置数据源

基础配置（HikariCP 默认连接池）

```yaml
spring:
  datasource:
    url: jdbc:mysql://localhost:3306/testdb?useSSL=false&serverTimezone=UTC&allowPublicKeyRetrieval=true
    username: root
    password: password
    driver-class-name: com.mysql.cj.jdbc.Driver

# MyBatis 配置
mybatis:
  # Mapper XML 文件位置（可选）
  mapper-locations: classpath:mapper/*.xml
  # 实体类别名（可省略包名）
  type-aliases-package: com.example.model
  # 开启驼峰命名自动转换（user_name → userName）
  configuration:
    map-underscore-to-camel-case: true
    # 日志输出 SQL（开发环境可用）
    log-impl: org.apache.ibatis.logging.stdout.StdOutImpl
```

使用 Druid 连接池（可选）

```yaml
spring:
  datasource:
    type: com.alibaba.druid.pool.DruidDataSource
    druid:
      initial-size: 5
      min-idle: 5
      max-active: 20
      test-on-borrow: true
      validation-query: SELECT 1
```

### 创建实体类（POJO）

```
package com.example.model;

import lombok.Data;

@Data
public class User {
    private Long id;
    private String name;
    private Integer age;
}
```

> 🔸 推荐使用 Lombok 的 `@Data` 自动生成 getter/setter/toString。

------

### 创建 Mapper 接口

```
package com.example.mapper;

import com.example.model.User;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import java.util.List;

// 方式1：在接口上加 @Mapper（每个接口都要加）
@Mapper
public interface UserMapper {
    User selectById(Long id);
    List<User> selectAll();
    void insert(User user);
    void update(User user);
    void deleteById(Long id);

    // 多参数示例
    List<User> selectByNameAndAge(@Param("name") String name, @Param("age") Integer age);
}
```

或者不在每个接口加 `@Mapper`，而是在启动类上统一扫描（推荐）：

```
@SpringBootApplication
@MapperScan("com.example.mapper") // 扫描整个包下的 Mapper
public class MyApplication {
    public static void main(String[] args) {
        SpringApplication.run(MyApplication.class, args);
    }
}
```

------

### 编写 Mapper XML 文件（可选）

如果使用 XML（适合复杂 SQL），在 `src/main/resources/mapper/UserMapper.xml`：

```
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper
  PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
  "https://mybatis.org/dtd/mybatis-3-mapper.dtd">

<mapper namespace="com.example.mapper.UserMapper">

  <select id="selectById" resultType="User">
    SELECT * FROM users WHERE id = #{id}
  </select>

  <select id="selectAll" resultType="User">
    SELECT * FROM users
  </select>

  <insert id="insert" useGeneratedKeys="true" keyProperty="id">
    INSERT INTO users(name, age) VALUES(#{name}, #{age})
  </insert>

  <update id="update">
    UPDATE users SET name = #{name}, age = #{age} WHERE id = #{id}
  </update>

  <delete id="deleteById">
    DELETE FROM users WHERE id = #{id}
  </delete>

  <select id="selectByNameAndAge" resultType="User">
    SELECT * FROM users
    WHERE name = #{name}
    <if test="age != null">
      AND age = #{age}
    </if>
  </select>

</mapper>
```

`useGeneratedKeys="true"` + `keyProperty="id"`：自动回填自增主键。

------

### Service 与 Controller 使用

Service 层

```
@Service
public class UserService {

    @Autowired
    private UserMapper userMapper;

    public User getUser(Long id) {
        return userMapper.selectById(id);
    }

    public void addUser(User user) {
        userMapper.insert(user); // 插入后 user.id 会被自动填充
    }

    public List<User> search(String name, Integer age) {
        return userMapper.selectByNameAndAge(name, age);
    }
}
```

### Controller 层（测试用）

```
@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/{id}")
    public User getUser(@PathVariable Long id) {
        return userService.getUser(id);
    }

    @PostMapping
    public void addUser(@RequestBody User user) {
        userService.addUser(user);
    }
}
```

------

### 事务管理（自动支持）

Spring Boot 默认启用 **声明式事务**，只需在 Service 方法上加 `@Transactional`：

```
@Service
public class UserService {

    @Transactional
    public void transfer() {
        userMapper.updateBalance(userId1, -100);
        userMapper.updateBalance(userId2, +100);
        // 异常会自动回滚
    }
}
```

> ✅ MyBatis 与 Spring 的事务无缝集成，无需额外配置。

------

### 常用配置项说明

| 配置项                                               | 说明                                       |
| ---------------------------------------------------- | ------------------------------------------ |
| `mybatis.mapper-locations`                           | XML 文件路径，如 `classpath:mapper/*.xml`  |
| `mybatis.type-aliases-package`                       | 实体类别名包，XML 中可写 `User` 而非全类名 |
| `mybatis.configuration.map-underscore-to-camel-case` | 开启下划线→驼峰自动映射                    |
| `mybatis.configuration.log-impl`                     | 指定日志实现，打印 SQL（开发用）           |
| `mybatis.type-handlers-package`                      | 自定义 TypeHandler 包                      |
| `mybatis.configuration.cache-enabled`                | 是否开启二级缓存（默认 true）              |

## PageHelper

`PageHelper` 是 MyBatis 最流行的**分页插件**之一，它通过拦截 SQL 自动拼接 `LIMIT`（MySQL）、`ROWNUM`（Oracle）等方言，实现**无侵入式物理分页**。在 Spring Boot + MyBatis 项目中集成非常简单。

### 添加依赖（Maven）

### 对于 Spring Boot 项目：

```
<!-- PageHelper Starter（推荐） -->
<dependency>
    <groupId>com.github.pagehelper</groupId>
    <artifactId>pagehelper-spring-boot-starter</artifactId>
    <version>1.4.7</version> <!-- 兼容 Spring Boot 2.x / 3.x -->
</dependency>
```

> [!NOTE]
>
> 使用 `pagehelper-spring-boot-starter` 会自动引入 MyBatis 和 PageHelper 核心包，**无需额外配置拦截器**。



> [!WARNING]
>
> > - 如果你已手动引入了 `mybatis-spring-boot-starter`，**不要重复引入**，starter 会自动处理依赖。
> > - 版本 1.4.0+ 支持 Spring Boot 3（Jakarta EE 9+）。

### 配置（application.yml，可选）

PageHelper 默认自动配置，但你可以自定义行为：

```
pagehelper:
  helper-dialect: mysql          # 数据库方言（可省略，自动检测）
  reasonable: true               # 分页合理化（如 pageNum < 1 → 自动设为 1）
  support-methods-arguments: false
  params: count=countSql         # 指定 count 查询参数名
  auto-runtime-dialect: true     # 自动识别运行时数据库类型（多数据源时有用）
```

| 参数                        | 说明                                                         |
| --------------------------- | ------------------------------------------------------------ |
| `helper-dialect`            | 数据库类型：`mysql`, `oracle`, `postgresql`, `sqlserver` 等  |
| `reasonable`                | 启用后，pageNum 超出范围会自动修正（如总页数=5，请求第10页 → 返回第5页） |
| `support-methods-arguments` | 是否支持通过 Mapper 方法参数传递分页参数（一般不用）         |

> [!TIP]
>
> 大多数情况下，**无需任何配置**，插件会自动工作。

### 使用方式（核心 API）

#### 基础分页查询

```
@Service
public class UserService {

    @Autowired
    private UserMapper userMapper;

    public PageInfo<User> getUsers(int pageNum, int pageSize) {
        // 只需在查询前调用 PageHelper.startPage()
        PageHelper.startPage(pageNum, pageSize);
        
        // 紧跟一个 MyBatis 查询方法（必须是第一个查询）
        List<User> users = userMapper.selectAll();  // 不带参数
		// List<User> users = userMapper.selectByCondition(name, minAge, status); //携带参数
        // 封装分页信息
        return new PageInfo<>(users);
    }
}
```

> ✅ **关键规则**：
>
> - `PageHelper.startPage()` 必须**紧挨着**要分页的查询方法；
> - 该查询方法**只能执行一次 SQL**（不能有多个 select）；
> - 查询方法**不能写在 startPage 之前或之后太远**（因为基于 ThreadLocal）。

#### 返回结果说明：`PageInfo<T>`

`PageInfo` 包含丰富的分页信息：

```
PageInfo<User> pageInfo = userService.getUsers(1, 10);

System.out.println("当前页: " + pageInfo.getPageNum());
System.out.println("每页数量: " + pageInfo.getPageSize());
System.out.println("总记录数: " + pageInfo.getTotal());
System.out.println("总页数: " + pageInfo.getPages());
System.out.println("是否有上一页: " + pageInfo.isHasPreviousPage());
System.out.println("是否有下一页: " + pageInfo.isHasNextPage());
System.out.println("数据列表: " + pageInfo.getList());
```

常用字段：

- `list`: 当前页数据
- `total`: 总记录数
- `pages`: 总页数
- `pageNum`, `pageSize`
- `hasPreviousPage`, `hasNextPage`

#### .条件分页示例

```
public PageInfo<User> searchUsers(String name, Integer age, int pageNum, int pageSize) {
    PageHelper.startPage(pageNum, pageSize);
    
    // 带条件的查询（Mapper 方法支持动态 SQL）
    List<User> users = userMapper.selectByNameAndAge(name, age);
    
    return new PageInfo<>(users);
}
```

对应的 Mapper 方法（XML 或注解）：

```
List<User> selectByNameAndAge(@Param("name") String name, @Param("age") Integer age);
```

```
<select id="selectByNameAndAge" resultType="User">
  SELECT * FROM users
  <where>
    <if test="name != null and name != ''">
      AND name LIKE CONCAT('%', #{name}, '%')
    </if>
    <if test="age != null">
      AND age = #{age}
    </if>
  </where>
</select>
```

> ✅ PageHelper 会自动执行两条 SQL：
>
> 1. `SELECT COUNT(*) FROM (...)` → 获取 total
> 2. `SELECT ... LIMIT offset, size` → 获取当前页数据

### 高级用法

#### 不需要总记录数（提升性能）

如果前端不需要总页数（如“加载更多”场景），可关闭 count 查询：

```
PageHelper.startPage(pageNum, pageSize, false); // 第三个参数：是否执行 count 查询
List<User> users = userMapper.selectAll();
// 此时 PageInfo.getTotal() = 0
```

#### 排序（orderBy）

```
// 按 name 升序，age 降序
PageHelper.startPage(pageNum, pageSize).setOrderBy("name ASC, age DESC");
List<User> users = userMapper.selectAll();
```

> ⚠️ 注意：`orderBy` 会拼接到 SQL 中，**需防止 SQL 注入**！建议只允许白名单字段。

####  安全排序（推荐）

```
// 使用安全方式（PageHelper 提供工具类）
String orderBy = SafeOrderUtil.safeOrder("name", "age"); // 自定义白名单校验
PageHelper.startPage(pageNum, pageSize).setOrderBy(orderBy);
```

或者自己封装校验逻辑。
