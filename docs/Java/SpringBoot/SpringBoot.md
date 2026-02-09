# Spring boot

## 介绍

Spring Boot是由Pivotal团队提供的一套开源框架，可以简化spring应用的创建及部署。它提供了丰富的Spring模块化支持，可以帮助开发者更轻松快捷地构建出企业级应用。Spring Boot通过自动配置功能，降低了复杂性，同时支持基于JVM的多种开源框架，可以缩短开发时间，使开发更加简单和高效。

> Spring Boot帮助你创建可以运行的独立的、基于Spring的生产级应用程序。 我们对Spring平台和第三方库采取了有主见的观点，这样你就能以最少的麻烦开始工作。 大多数Spring Boot应用程序只需要很少的Spring配置。
>
> 可以使用Spring Boot来创建Java应用程序，可以通过使用 `java -jar` 或更传统的war部署来启动。
>
> 主要目标是。
>
> - 为所有的Spring开发提供一个根本性的更快、更广泛的入门体验。
> - 开箱即用，但随着需求开始偏离默认值，请迅速摆脱困境。
> - 提供一系列大类项目常见的非功能特性（如嵌入式服务器、安全、度量、健康检查和外部化配置）。
> - 绝对没有代码生成（当不以原生镜像为目标时），也不要求XML配置。



## 创建项目

### 配置Maven

### `spring-boot-starter-parent`

`spring-boot-starter-parent` 是 Spring Boot 提供的一个 **父级依赖**（Parent POM），用于简化 Spring Boot 项目的依赖管理和构建配置。它是 Spring Boot 项目的基础依赖，为开发者提供了一系列默认配置和最佳实践，帮助快速构建 Spring Boot 应用。

```xml
<parent>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-parent</artifactId>
    <version>3.5.4</version>
    <relativePath/> <!-- 查找本地仓库，非必须 -->
</parent>
```

#### 核心作用

- **统一版本**：通过继承 `spring-boot-dependencies`，为 Spring Boot 及其生态（如 Spring Framework、Spring Data、Spring Security 等）提供统一的依赖版本管理。
- **避免版本冲突**：开发者无需手动指定依赖版本，版本号由 `spring-boot-starter-parent` 统一管理，减少依赖冲突。
- **覆盖版本**：如果需要特定版本，可以通过 `<properties>` 覆盖默认版本（例如升级 Spring Boot 版本）。

#### 默认插件配置

内置常用插件：预配置了 Maven 构建所需的插件（如编译、测试、打包等），无需手动配置。

- `maven-compiler-plugin`：默认使用 Java 8 编译（可通过 `<java.version>` 修改）。
- `maven-surefire-plugin`：配置测试运行参数。
- `spring-boot-maven-plugin`：支持打包为可执行 JAR/WAR。

- **自定义插件**：可以添加或覆盖默认插件配置。

```java
// 覆盖配置
<properties>
    <java.version>17</java.version> <!-- 修改 Java 版本 -->
    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding> <!-- 修改编码 -->
</properties>
```

#### 版本一致性

- **确保兼容性**：Spring Boot 的所有依赖（如 Spring Framework、Hibernate、Jetty 等）经过测试和验证，确保版本兼容性。
- **减少兼容问题**：开发者无需手动协调不同库的版本依赖。

### spring-boot-starter-web 

`spring-boot-starter-web` 是 Spring Boot 提供的核心 Web 开发依赖包，用于快速构建基于 Spring MVC 的 Web 应用程序。它通过自动配置和依赖管理简化了 Web 开发，开发者无需手动配置常见的 Web 组件（如内嵌服务器、JSON 序列化等），只需专注于业务逻辑的实现。

spring-boot-starter-web 被称为场景启动器，场景启动器根据maven 的依赖传递原则，自动会把这个场景所需要的所有依赖导入进去。

```xml
<dependencies>
	<dependency>
		<groupId>org.springframework.boot</groupId>	
		<artifactId>spring-boot-starter-web</artifactId>
	</dependency>
</dependencies>
```

####  核心功能

**内嵌服务器**

- **默认使用 Tomcat**：提供开箱即用的内嵌 Servlet 容器，无需额外部署外部服务器。

- 可替换其他容器：支持 Jetty 或 Undertow。

  ```
  <!-- 使用 Jetty 替代 Tomcat -->
  <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-jetty</artifactId>
  </dependency>
  ```

**Spring MVC 支持**

- 自动配置 `DispatcherServlet`、`ViewResolver`、`MessageConverter` 等核心组件。
- 支持 RESTful API 开发（如 `@RestController`、`@RequestMapping` 注解）。

**JSON 处理**

- 集成 Jackson 库，自动支持 JSON 的序列化/反序列化。
- 默认使用 `Jackson2ObjectMapper` 处理 HTTP 请求和响应的 JSON 数据。

**自动配置**

- 根据项目依赖自动配置 Web 功能（如静态资源处理、跨域支持等）。

- 可通过`application.properties` 或 `application.yml` 覆盖默认配置：

  ```
  # 修改服务器端口
  server.port=9090
  # 配置静态资源路径
  spring.web.resources.static-locations=classpath:/custom-static/
  ```

------

#### 核心依赖

`spring-boot-starter-web` 包含以下核心依赖：

| **依赖**                     | **功能**                                               |
| ---------------------------- | ------------------------------------------------------ |
| `spring-boot-starter`        | Spring Boot 核心依赖（自动配置、日志、Spring Core 等） |
| `spring-webmvc`              | Spring MVC 框架（控制器、视图解析等）                  |
| `tomcat-embed-core`          | 内嵌 Tomcat 服务器                                     |
| `jackson-databind`           | JSON 序列化/反序列化                                   |
| `spring-boot-starter-tomcat` | Tomcat 容器相关依赖（如 EL 表达式、WebSocket 支持）    |

**依赖树示例**：

```
spring-boot-starter-web
├── spring-boot-starter (核心依赖)
├── spring-webmvc (Spring MVC)
├── tomcat-embed-core (内嵌 Tomcat)
├── jackson-databind (JSON 处理)
└── spring-boot-starter-tomcat (Tomcat 支持)
```

------

#### 使用场景

**RESTful API 服务**

- 快速构建基于 HTTP 的 API 接口。

  ```
  @RestController
  public class HelloController {
      @GetMapping("/hello")
      public String sayHello() {
          return "Hello, Spring Boot!";
      }
  }
  ```

**内嵌服务器应用**

- 无需部署外部服务器，直接运行

  

  ```
  @SpringBootApplication
  public class Application {
      public static void main(String[] args) {
          SpringApplication.run(Application.class, args);
      }
  }
  ```

**文件上传/下载**

- 集成文件处理功能，支持上传和下载。

  

  ```
  @RestController
  public class FileController {
      // 文件上传
      @PostMapping("/upload")
      public String uploadFile(@RequestParam("file") MultipartFile file) {
          return "File uploaded: " + file.getOriginalFilename();
      }
  
      // 文件下载
      @GetMapping("/download")
      public void downloadFile(HttpServletResponse response) throws IOException {
          response.setContentType("application/octet-stream");
          response.setHeader("Content-Disposition", "attachment; filename=example.txt");
          response.getOutputStream().write("Hello World!".getBytes());
      }
  }
  ```

**跨域支持（CORS）**

- 通过配置或注解解决浏览器的跨域限制。

  ```
  @Configuration
  public class CorsConfig {
      @Bean
      public WebMvcConfigurer corsConfigurer() {
          return new WebMvcConfigurer() {
              @Override
              public void addCorsMappings(CorsRegistry registry) {
                  registry.addMapping("/api/**").allowedOrigins("http://example.com");
              }
          };
      }
  }
  ```

#### 与 spring-boot-starter 的区别

**核心区别**

| **特性**     | **spring-boot-starter**                           | **spring-boot-starter-web**                                  |
| ------------ | ------------------------------------------------- | ------------------------------------------------------------ |
| **功能定位** | Spring Boot 的核心启动器，提供基础功能。          | 专为 Web 开发设计的启动器，包含 Web 相关功能。               |
| **主要依赖** | 自动配置、日志、YAML、Spring Core、Spring Context | 包含 `spring-boot-starter` 的所有功能，加上 Web 开发所需依赖（如 Spring MVC、Tomcat、Jackson）。 |
| **适用场景** | 非 Web 项目（如命令行工具、批处理任务、后台服务） | Web 项目（如 REST API、MVC 应用、内嵌服务器等）              |
| **是否必须** | 是 Spring Boot 项目的基础依赖                     | 是 Web 项目的必需依赖（无需额外引入 `spring-boot-starter`）  |

------

**包含关系**

`spring-boot-starter-web` **包含** `spring-boot-starter`，因此无需重复引入。

### 启动器

默认情况下，Maven 和 Gradle 从`src/main/java` 编译源代码，因此您需要创建该目录结构，然后添加一个名为 的文件，`src/main/java/com/example/MyApplication.java`其中包含以下代码：

```java
package com.dazzle.start;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class StartApplication {
    public static void main(String[] args) {
        SpringApplication.run(StartApplication.class, args);
    }
}
```

#### SpringBootApplication 注解

`@SpringBootApplication` 是 Spring Boot 框架中**最核心的注解**，用于简化 Spring Boot 应用的配置和启动流程。它是一个**组合注解**（复合注解），集成了多个关键注解的功能，使得开发者只需通过一个注解即可快速构建 Spring Boot 应用。

通过SpringBootApplication注解装饰的类为主程序类，默认情况下Spring boot 只会扫描主程序所在的包及其下面的子包。

```java
@SpringBootApplication // 组合注解，包含 @Configuration、@EnableAutoConfiguration、@ComponentScan
public class MyApplication {
    public static void main(String[] args) {
        SpringApplication.run(MyApplication.class, args);
    }
}
```



#### SpringApplication

`SpringApplication` 是 Spring Boot 框架中**核心的启动类**，负责初始化和启动 Spring 应用上下文（`ApplicationContext`），并管理整个应用的生命周期。它的设计目标是通过**自动配置**和**约定优于配置**的原则，简化 Spring 应用的启动流程。

### 控制器

在 Java Web 开发中，**控制器（Controller）** 是 **MVC 架构模式** 中的核心组件之一，主要负责接收用户请求（如 HTTP 请求）、处理业务逻辑、并返回响应（如 HTML 页面或 JSON 数据）。控制器在前后端之间起到桥梁作用，协调模型（Model）和视图（View）之间的交互。

#### 控制器的基本概念

**MVC 架构中的角色**

| 层级                     | 职责                         | 示例                             |
| ------------------------ | ---------------------------- | -------------------------------- |
| **Model（模型）**        | 处理业务逻辑、数据访问       | Service 层、DAO 层               |
| **View（视图）**         | 展示数据、用户界面           | JSP、Thymeleaf、HTML             |
| **Controller（控制器）** | 接收请求、调用模型、返回视图 | Spring MVC 控制器、Struts Action |

**控制器的核心职责**

- **接收请求**：监听并处理 HTTP 请求（GET、POST、PUT、DELETE 等）。
- **参数绑定**：将请求参数（如 URL、表单、JSON）绑定到方法参数。
- **调用服务**：调用 Service 层处理业务逻辑。
- **返回响应**：返回视图名称、JSON 数据或重定向路径。

在 Spring MVC 中，控制器通常使用 `@Controller` 或 `@RestController` 注解实现。

```
package com.dazzle.start.controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {
    @RequestMapping("/")
    public String hello() {
        return "hello world";
    }
}
```

#### 关键注解说明

| 注解                                             | 作用                                                         |
| ------------------------------------------------ | ------------------------------------------------------------ |
| `@RestController`                                | 组合 `@Controller` 和 `@ResponseBody`，返回值直接作为响应体（适用于 RESTful API）。 |
| `@RequestMapping`                                | 映射请求路径（类级别或方法级别）。                           |
| `@GetMapping`、`@PostMapping`                    | 简化 HTTP 方法的映射（GET、POST）。                          |
| `@PathVariable`、`@RequestParam`、`@RequestBody` | 绑定请求参数。                                               |
| `@Valid`                                         | 参数校验（需配合 `@NotNull`、`@Size` 等注解）。              |
| `ResponseEntity`                                 | 构建完整的 HTTP 响应（状态码、响应头、响应体）。             |

### 运行

此时，程序已经可以正常工作。由于使用了`spring-boot-starter-parent`POM，因此有一个有用的`run`目标，可以用来启动应用程序。`mvn spring-boot:run`从项目根目录键入 来启动应用程序。

```xml
<!--pom.xml-->
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>3.5.4</version>
        <relativePath/> <!-- lookup parent from repository -->

    </parent>
    <groupId>com.dazzle</groupId>
    <artifactId>start</artifactId>
    <version>0.0.1-SNAPSHOT</version>
    <name>start</name>
    <description>start</description>
    <developers>
        <developer/>
    </developers>
    <properties>
        <java.version>21</java.version>
    </properties>
    <dependencies>
       <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
    </dependencies>
</project>

```

```java
// StartApplication.java
package com.dazzle.start;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class StartApplication {
    public static void main(String[] args) {
        SpringApplication.run(StartApplication.class, args);
    }
}

// HelloController.java
package com.dazzle.start.controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {
    @RequestMapping("/")
    public String hello() {
        return "hello world";
    }
}
```

启动后访问 `http://location:8080/`，浏览器输入以下结果：

```text
hello world
```

### 创建可执行的jar

我们可以将 spring boot 项目创建一个完全独立的、可在生产环境中运行的可执行 jar 文件。可执行 jar 文件（有时也称为“超级 jar”或“胖 jar”）是包含已编译类以及代码运行所需的所有 jar 依赖项的归档文件。

#### Maven配置

要创建可执行jar，需要将 添加`spring-boot-maven-plugin`到`pom.xml`。

```xml
<build>
	<plugins>
		<plugin>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-maven-plugin</artifactId>
		</plugin>
	</plugins>
</build>
```

配置完成后执行 在项目根目录执行`mvn package`，将项目打包成jar 文件。

#### 运行

打包完成后可在taget 文件夹看到`myproject-x.x.x-SNAPSHOT.jar`。如果你想查看文件内容，可以使用`jar tvf`，如下所示：

```
jar tvf target/myproject-0.0.1-SNAPSHOT.jar
```

启动后访问 `http://location:8080/`，浏览器输入以下结果：`hello world`

## 目录结构

Spring Boot 项目通常遵循 **约定优于配置** 的原则，采用标准化的目录结构，便于团队协作和维护。以下是典型项目的目录结构：

```bash
my-springboot-project/
├── src/
│   ├── main/
│   │   ├── java/                  # Java 源代码目录
│   │   │   └── com.example.demo/  # 包名（通常为反向域名）
│   │   │       ├── DemoApplication.java  # 启动类
│   │   │       ├── controller/    # 控制器层（接收 HTTP 请求）
│   │   │       ├── service/       # 业务逻辑层（接口）
│   │   │       ├── service/impl/  # 业务逻辑实现层
│   │   │       ├── repository/    # 数据访问层（JPA/MyBatis）
│   │   │       ├── entity/        # 实体类（与数据库表映射）
│   │   │       ├── config/        # 配置类（如安全配置、定时任务）
│   │   │       ├── dto/           # 数据传输对象（Data Transfer Object）
│   │   │       ├── vo/            # 视图对象（View Object，返回给前端）
│   │   │       └── util/          # 工具类（如日期、加密工具）
│   │   │
│   │   ├── resources/             # 资源文件目录
│   │   │   ├── application.yml    # 主配置文件
│   │   │   ├── static/            # 静态资源（CSS、JS、图片）
│   │   │   ├── templates/         # 模板文件（如 Thymeleaf）
│   │   │   └── mapper/            # MyBatis 的 XML 映射文件
│   │   │
│   └── test/                      # 测试代码目录
│       └── java/
│           └── com.example.demo/  # 测试类
│
├── pom.xml                        # Maven 构建文件（或 build.gradle）
└── README.md                      # 项目说明文档
```

