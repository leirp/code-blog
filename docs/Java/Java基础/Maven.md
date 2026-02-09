# Maven

Maven 是一个 **项目管理与自动化构建工具**，主要用于 Java 项目（也支持其他语言）。它通过标准化项目结构、依赖管理和自动化构建流程，简化了 Java 项目的开发、测试和部署。

## 核心特点

- **依赖管理**：自动下载和管理项目所需的第三方库（JAR 文件）。
- **标准化项目结构**：统一项目目录结构，提升团队协作效率。
- **自动化构建**：提供编译、测试、打包、部署等标准化流程。
- **插件化扩展**：通过插件支持多种功能（如代码质量检查、生成文档）。

------

## 核心功能

### 依赖管理（Dependency Management）

Maven 通过 `pom.xml` 文件定义项目依赖的第三方库（如 Spring、MyBatis），并自动下载和管理这些依赖。

- **依赖传递**：自动处理依赖的依赖（例如，如果项目依赖 A，A 依赖 B，则 Maven 会自动下载 B）。
- **版本控制**：强制指定依赖的版本，避免版本冲突。
- **依赖范围**：定义依赖的作用范围（如 `compile`、`test`、`provided`）。

```
<dependencies>
    <!-- Spring Core 依赖 -->
    <dependency>
        <groupId>org.springframework</groupId>
        <artifactId>spring-core</artifactId>
        <version>5.3.0</version>
    </dependency>
    <!-- JUnit 测试依赖 -->
    <dependency>
        <groupId>junit</groupId>
        <artifactId>junit</artifactId>
        <version>4.13.2</version>
        <scope>test</scope>
    </dependency>
</dependencies>
```


### 标准化项目结构

Maven 定义了一套标准的项目目录结构，确保项目的一致性和可维护性。

```
my-project/
├── pom.xml                # Maven 核心配置文件
├── src/
│   ├── main/
│   │   ├── java/            # Java 源代码
│   │   ├── resources/       # 配置文件（如 application.properties）
│   │   └── webapp/          # Web 项目资源（如 JSP、HTML）
│   └── test/
│       ├── java/            # 单元测试代码
│       └── resources/       # 测试配置文件
```

### 自动化构建

Maven 提供了一套标准化的构建流程（生命周期），包括编译、测试、打包、部署等阶段。

------

## Maven 的核心概念

### POM（Project Object Model）

`pom.xml` 是 Maven 项目的核心配置文件，包含以下信息：

- 项目元数据（如 `groupId`、`artifactId`、`version`）。
- 依赖列表（`dependencies`）。
- 插件配置（`plugins`）。
- 构建参数（如 JDK 版本）。

```xml
<project xmlns="http://maven.apache.org/POM/4.0.0" ...>
    <modelVersion>4.0.0</modelVersion>
    <!-- 项目坐标 -->
    <groupId>com.example</groupId>
    <artifactId>my-project</artifactId>
    <version>1.0.0</version>
    <!-- 依赖列表 -->
    <dependencies>
        ...
    </dependencies>
    <!-- 构建配置 -->
    <build>
        <plugins>
            <!-- 编译插件 -->
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-compiler-plugin</artifactId>
                <version>3.8.1</version>
                <configuration>
                    <source>1.8</source>
                    <target>1.8</target>
                </configuration>
            </plugin>
        </plugins>
    </build>
</project>
```

###  仓库（Repository）

Maven 通过仓库管理依赖库，分为三类：

- **本地仓库**：默认位于 `~/.m2/repository`，存储下载的依赖。
- **中央仓库**：Maven 官方维护的公共仓库，包含主流开源库。
- **私有仓库（私服）**：企业内部搭建的仓库（如 Nexus），用于管理内部依赖或镜像中央仓库。

配置私有仓库：

```xml
<repositories>
    <repository>
        <id>my-nexus</id>
        <url>https://nexus.mycompany.com/repository/maven-releases/</url>
    </repository>
</repositories>
```

### 生命周期（Lifecycle）

Maven 的生命周期定义了构建项目的标准化阶段，分为三套独立的生命周期：

1. **`default`**：核心构建流程（编译、测试、打包、部署）。
2. **`clean`**：清理项目生成的文件。
3. **`site`**：生成项目文档站点。

##### **default 生命周期的常见阶段**

| 阶段       | 作用                            |
| ---------- | ------------------------------- |
| `validate` | 验证项目配置是否正确            |
| `compile`  | 编译源代码（`src/main/java`）   |
| `test`     | 运行单元测试（`src/test/java`） |
| `package`  | 打包（如生成 JAR/WAR 文件）     |
| `verify`   | 验证包是否符合预期              |
| `install`  | 将包安装到本地仓库              |
| `deploy`   | 部署到远程仓库或服务器          |

##### 常用 Maven 命令

```
mvn clean          # 清理项目
mvn compile        # 编译源代码
mvn test           # 运行单元测试
mvn package        # 打包项目（生成 target/*.jar）
mvn install        # 安装到本地仓库
mvn deploy         # 部署到远程仓库
mvn dependency:tree # 查看依赖树
```

## Maven 的工作原理

1. **依赖解析**：根据 `pom.xml` 中的依赖声明，从仓库下载所需的 JAR 文件。
2. **编译构建**：调用编译插件（如 `maven-compiler-plugin`）编译源代码。
3. **测试执行**：运行测试框架（如 JUnit）并生成测试报告。
4. **打包部署**：根据项目类型（JAR/WAR）打包，并部署到仓库或服务器。

## Maven 配置

### 多模块

多模块项目通常包含一个 **父模块（Parent Module）** 和多个 **子模块（Sub Modules）**，结构如下：

```bash
my-project/
├── pom.xml                     # 父模块 POM
├── module-common/              # 公共模块（工具类、通用代码）
│   └── pom.xml
├── module-user/                # 用户模块（业务逻辑）
│   └── pom.xml
├── module-order/               # 订单模块（业务逻辑）
│   └── pom.xml
└── module-api/                 # 接口模块（API 定义）
    └── pom.xml
```

#### 父模块配置

父模块的 `packaging` 必须为 `pom`，并通过 `<modules>` 声明子模块。

- **`<modules>`**：列出所有子模块的目录名。
- **`<dependencyManagement>`**：统一管理依赖版本，子模块无需指定版本号。
- **插件配置**：所有子模块继承父模块的插件配置。

```xml
<!-- my-project/pom.xml -->
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 
                             http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    
    <!-- 项目基本信息 -->
    <groupId>com.example</groupId>
    <artifactId>my-project</artifactId>
    <version>1.0.0</version>
    <packaging>pom</packaging> <!-- 多模块项目必须为 pom -->

    <!-- 声明子模块 -->
    <modules>
        <module>module-common</module>
        <module>module-user</module>
        <module>module-order</module>
        <module>module-api</module>
    </modules>

    <!-- 统一依赖版本管理 -->
    <dependencyManagement>
        <dependencies>
            <!-- 示例：Spring Boot 版本统一 -->
            <dependency>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-dependencies</artifactId>
                <version>2.7.12</version>
                <scope>import</scope>
                <type>pom</type>
            </dependency>
        </dependencies>
    </dependencyManagement>

    <!-- 插件统一配置 -->
    <build>
        <plugins>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-compiler-plugin</artifactId>
                <version>3.8.1</version>
                <configuration>
                    <source>1.8</source>
                    <target>1.8</target>
                </configuration>
            </plugin>
        </plugins>
    </build>
</project>
```

#### 子模块

子模块的 `pom.xml` 需要继承父模块，并声明自身依赖。

- **`<parent>`**：必须指定父模块的 `groupId`、`artifactId` 和 `version`。
- **`<relativePath>`**：指向父模块的 `pom.xml`，默认是 `../pom.xml`。
- **依赖管理**：子模块直接引用其他子模块或第三方库，无需指定版本（版本由父模块统一管理）。

```
<!-- module-user/pom.xml -->
<project>
    <modelVersion>4.0.0</modelVersion>
    
    <!-- 继承父模块 -->
    <parent>
        <groupId>com.example</groupId>
        <artifactId>my-project</artifactId>
        <version>1.0.0</version>
        <relativePath>../pom.xml</relativePath> <!-- 父模块路径 -->
    </parent>

    <!-- 子模块基本信息 -->
    <artifactId>module-user</artifactId>
    <packaging>jar</packaging> <!-- 子模块类型 -->

    <!-- 依赖声明 -->
    <dependencies>
        <!-- 引用其他子模块 -->
        <dependency>
            <groupId>com.example</groupId>
            <artifactId>module-common</artifactId>
        </dependency>

        <!-- 引用第三方库 -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
    </dependencies>
</project>
```

#### 模块间依赖管理

子模块互相依赖：

如果 `module-user` 依赖 `module-common`，需在 `module-user/pom.xml` 中声明：

```xml
<dependencies>
    <dependency>
        <groupId>com.example</groupId>
        <artifactId>module-common</artifactId>
    </dependency>
</dependencies>
```

依赖传递性：

如果 `module-user` 依赖 `module-api`，而 `module-api` 依赖 `module-common`，则 `module-user` 会自动继承 `module-common` 的依赖。

排除依赖冲突：

```xml
<dependency>
    <groupId>com.example</groupId>
    <artifactId>module-api</artifactId>
    <exclusions>
        <exclusion>
            <groupId>com.example</groupId>
            <artifactId>module-common</artifactId>
        </exclusion>
    </exclusions>
</dependency>
```

### **构建多模块项目**

**构建整个项目**

在父模块目录下执行：

```
mvn clean package
```

Maven 会按模块声明顺序依次构建所有子模块。

**构建单个模块**

指定模块名称构建（如只构建 `module-user`）：

```
mvn clean package -pl module-user
```

**跳过测试**

```
mvn clean package -DskipTests
```

**安装到本地仓库**

```
mvn clean install
```

## Maven 的优势

- **自动化依赖管理**：避免手动下载和管理 JAR 文件。
- **标准化项目结构**：提升团队协作效率。
- **插件化扩展**：支持代码质量检查（如 `maven-checkstyle-plugin`）、生成文档（如 `maven-site-plugin`）。
- **多模块管理**：支持复杂项目的模块化拆分。

## Maven 的最佳实践

### 合理使用依赖范围

- `compile`（默认）：主代码和测试代码均可使用。	
- `test`：仅测试代码可用（如 JUnit）。
- `provided`：编译时使用，运行时由环境提供（如 `servlet-api`）。

### 配置镜像仓库

在 `settings.xml` 中配置国内镜像（如阿里云）加速依赖下载。

```
<mirrors>
    <mirror>
        <id>aliyun</id>
        <url>https://maven.aliyun.com/repository/public</url>
        <mirrorOf>central</mirrorOf>
    </mirror>
</mirrors>
```

### 多模块项目管理

将大型项目拆分为多个模块（如 `common`、`service`、`web`），通过 `pom.xml` 统一管理。

```
<modules>
    <module>common</module>
    <module>service</module>
</modules>
```

### 版本管理

- 使用语义化版本号（如 `1.0.0`、`1.0.0-SNAPSHOT`）。
- 快照版本（`SNAPSHOT`）用于开发阶段，正式版本需发布为稳定版本。

### 插件配置

配置常用插件（如编译、测试覆盖率）：

```xml
<build>
    <plugins>
        <!-- 编译插件 -->
        <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-compiler-plugin</artifactId>
            <configuration>
                <source>1.8</source>
                <target>1.8</target>
            </configuration>
        </plugin>
        <!-- 测试覆盖率插件 -->
        <plugin>
            <groupId>org.jacoco.org</groupId>
            <artifactId>jacoco-maven-plugin</artifactId>
            <executions>
                <execution>
                    <goals>
                        <goal>prepare-agent</goal>
                    </goals>
                </execution>
            </executions>
        </plugin>
    </plugins>
</build>
```
