

# SpringWeb

## Thymeleaf

Thymeleaf 是一个现代化的 **服务器端 Java 模板引擎**，专为 Web 和独立环境设计。它支持 HTML、XML、JavaScript、CSS 甚至纯文本的动态渲染，特别适合与 Spring Boot 集成。

### 核心特点

**自然模板（Natural Templates）**
 Thymeleaf 的模板是合法的 HTML 文件，即使不经过服务器渲染，也能直接在浏览器中打开并显示静态效果。通过 `th:*` 属性动态替换数据，实现动静分离。

```
<p th:text="${message}">静态默认文本</p>
```

**开箱即用（Out-of-the-box）**
 提供标准和 Spring 标准两种方言，支持 JSTL、OGNL 表达式风格，减少模板开发成本。

**与 Spring Boot 无缝集成**
 Spring Boot 官方推荐 Thymeleaf 作为默认模板引擎，自动配置视图解析器，无需复杂配置。

**多方言支持**
 支持 HTML5、XML、TEXT、JAVASCRIPT、CSS 等模板模式，满足多样化需求。

### 基本使用

导入 `thymeleaf` 相关依赖

```xml
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-thymeleaf</artifactId>
        </dependency>
```

在 `ThymeleafAutoConfiguration.class` 中，通过 `@EnableConfigurationProperties({ThymeleafProperties.class})`导入的 `ThymeleafProperties` 绑定了一些默认配置：

```java
// 默认前缀
public static final String DEFAULT_PREFIX = "classpath:/templates/";
// 默认后缀
public static final String DEFAULT_SUFFIX = ".html";
```

所以我们需要在`classpath:/templates/` 建立相关的html 文件，则会被spring boot 解析到。

```html
<!------------- resources/templates/hello.html ----------------->
<!DOCTYPE html>
<html lang="en" xmlns:th="http://www.thymeleaf.org">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<div>
    <!------------- th:text 会将当前div 中的节点替换为指定的内容 ----------------->
     <h1 th:text="${'hello world!'}">Hello!</h1>
    <h1 >Hello <span th:text="${name}">World</span>!</h1>
</div>
</body>
</html>
```

在 控制器中直接返回对应的模板地址：


```java
    @Controller
    public class HelloController {
        @GetMapping("/")
        public String hello(@RequestParam String name, Model model) {
            // 把需要共享的数据放入model 中
            model.addAttribute("name", name);
            return  "hello";
        }
    }
```

访问：

```
location:8000?name=leirp
```

### 核心语法

**变量表达式 `${...}**

用于访问模型（Model）中的变量或对象属性。

访问简单变量

```
<p th:text="${message}">默认消息</p>
```

访问对象属性

```
<p th:text="${user.name}">用户名</p>
```

调用方法：

```
<p th:text="${#dates.format(user.birthday, 'yyyy-MM-dd')}">日期格式化</p>
```

**选择变量表达式 `\*{...}`**

绑定特定对象后，通过 `*{}` 访问其属性。

```
<div th:object="${user}">
  <p th:text="*{name}">用户名</p>
  <p th:text="*{age}">年龄</p>
</div>
```

**链接表达式 `@{...}`**

用于生成 URL，支持相对路径和绝对路径。

- 静态资源引用

  ```
  <link rel="stylesheet" th:href="@{/css/style.css}" />
  <script th:src="@{/js/script.js}"></script>
  ```

- 动态链接

  ```
  <a th:href="@{/user/{id}(id=${user.id})}">用户详情</a>
  ```

**国际化表达式 `#{...}`**

支持多语言切换，通过 `messages.properties` 文件定义文本。

- 国际化配置

  ```
  <p th:text="#{welcome.message}">默认欢迎语</p>
  ```

  对应

  ```
  messages_en.properties
  ```

  ```
  welcome.message=Hello, {0}!
  ```

**片段引用表达式 `~{...}`**

复用模板片段，实现代码模块化。

- 定义片段

  ```
  <!-- footer.html -->
  <div th:fragment="copyright">
    <p>© 2025 Thymeleaf 示例</p>
  </div>
  ```

- 引用片段

  ```
  <div th:insert="~{footer :: copyright}"></div>
  ```

------

### 常用标签

| 标签                    | 用途                         | 示例                                                         |
| ----------------------- | ---------------------------- | ------------------------------------------------------------ |
| `th:text`               | 替换文本内容（自动转义）     | `<p th:text="${msg}">默认文本</p>`                           |
| `th:utext`              | 替换 HTML 内容（不转义）     | `<p th:utext="${htmlContent}">默认内容</p>`                  |
| `th:value`              | 替换表单元素的 `value` 值    | `<input th:value="${user.name}" />`                          |
| `th:href`               | 替换超链接地址               | `<a th:href="@{/home}">首页</a>`                             |
| `th:src`                | 替换资源路径（如图片、脚本） | `<img th:src="@{/images/logo.png}" />`                       |
| `th:each`               | 迭代遍历集合                 | `<li th:each="item : ${list}" th:text="${item}"></li>`       |
| `th:if` / `th:unless`   | 条件判断                     | `<div th:if="${user.isAdmin}">管理员面板</div>`              |
| `th:switch` / `th:case` | 多条件分支                   | `<div th:switch="${user.role}">   <p th:case="'admin'">管理员</p>   <p th:case="#{user.roles.guest}">访客</p> </div>` |

### 内置对象与工具

Thymeleaf 提供丰富的内置对象和工具类，简化常见操作。

**字符串处理（`#strings`）**

常用方法

```
${#strings.isEmpty(name)}       <!-- 判断空 -->
${#strings.contains(msg, 'abc')} <!-- 包含子串 -->
${#strings.toUpperCase(name)}    <!-- 转大写 -->
${#strings.substring(name, 0, 5)} <!-- 截取子串 -->
```

**日期处理（`#dates`）**

日期格式化

```
${#dates.format(date, 'yyyy-MM-dd HH:mm:ss')} <!-- 格式化 -->
${#dates.year(date)} <!-- 提取年份 -->
```

**集合操作（`#lists`、`#sets`、`#maps`）**

集合大小

```
${#lists.size(list)} <!-- 获取列表长度 -->
${#maps.containsKey(map, 'key')} <!-- 检查键是否存在 -->
```

**数字处理（`#numbers`）**

格式化数字

```
${#numbers.formatDecimal(value, 2, 'COMMA')} <!-- 保留两位小数 -->
```

### 流程控制与迭代

**条件判断**

`th:if` / `th:unless`：

```
<p th:if="${user.age >= 18}">成年人</p>
<p th:unless="${user.active}">用户未激活</p>
```

**迭代遍历**

`th:each`：

```
<ul>
  <li th:each="fruit : ${fruits}" th:text="${fruit}"></li>
</ul>
```

状态变量（索引、奇偶行）：

```
<tr th:each="user, stat : ${users}" th:class="${stat.odd}? 'odd' : 'even'">
  <td th:text="${stat.index}">索引</td>
  <td th:text="${user.name}">用户名</td>
</tr>
```

**嵌套循环**

二维数据遍历

```
Map<String, List<String>> categories = new HashMap<>();
categories.put("水果", Arrays.asList("苹果", "香蕉", "橙子"));
categories.put("蔬菜", Arrays.asList("西红柿", "黄瓜", "胡萝卜"));
model.addAttribute("categories", categories);
```

```
<div th:each="entry : ${categories}">
  <h3 th:text="${entry.key}"></h3>
  <ul>
    <li th:each="item : ${entry.value}" th:text="${item}"></li>
  </ul>
</div>
```
