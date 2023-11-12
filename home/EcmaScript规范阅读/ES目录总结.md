Ecmascript

## ECMAScript Data Types and Values

> ECMAScript Language Types (ECMAScript 语言类型:可以直接操作的类型值)

```text

 The Undefined Type
 The Null Type
 The Boolean Type
 The String Type
 The Symbol Type
 Numeric Types
    The Number Type
    The BigInt Type
 The Object Type

```

> ECMAScript Specification Types (ECMAScript 规范类型: 不能操作的 描述语言的语义和行为的)

```text

A specification type corresponds to meta-values that are used within algorithms to describe the semantics of ECMAScript language constructs and ECMAScript language types. The specification types include Reference, List, Completion Record, Property Descriptor, Environment Record, Abstract Closure, and Data Block. Specification type values are specification artefacts that do not necessarily correspond to any specific entity within an ECMAScript implementation. Specification type values may be used to describe intermediate results of ECMAScript expression evaluation but such values cannot be stored as properties of objects or values of ECMAScript language variables.


规范类型对应于算法中使用的元值，用于描述 ECMAScript 语言构造和 ECMAScript 语言类型的语义。规范类型包括引用、列表、完成记录、属性描述符、环境记录、抽象闭包和数据块。规范类型值是规范工件，不一定对应于 ECMAScript 实现中的任何特定实体。规范类型值可用于描述 ECMAScript 表达式求值的中间结果，但此类值不能存储为对象的属性或 ECMAScript 语言变量的值。


The Enum Specification Type：枚举类型，用于表示一组有限的命名常量值。
The List and Record Specification Types：列表和记录类型，用于表示一组有序的值和一组键值对。
The Set and Relation Specification Types：集合和关系类型，用于表示一组无序的唯一值和一组有序的键值对。
The Completion Record Specification Type：完成记录类型，用于表示语句或表达式的执行结果。
The Reference Record Specification Type：引用记录类型，用于表示对变量或属性的引用。
The Property Descriptor Specification Type：属性描述符类型，用于表示对象属性的特性和行为。
The Environment Record Specification Type：环境记录类型，用于表示变量和函数的作用域和绑定关系。
The Abstract Closure Specification Type：抽象闭包类型，用于表示函数的内部状态和执行上下文。
Data Blocks：数据块类型，用于表示二进制数据的缓冲区。
The PrivateElement Specification Type：私有元素类型，用于表示类中的私有成员。
The ClassFieldDefinition Record Specification Type：类字段定义记录类型，用于表示类中的字段定义。
Private Names：私有名称类型，用于表示类中的私有成员名称。
The ClassStaticBlockDefinition Record Specification Type：类静态块定义记录类型，用于表示类中的静态块定义。

```

## Abstract Operations （抽象操作）

- 描述语言的底层行为和算法； 包括类型转换，测试和比较的操作，对象的操作定义

| Type Conversion                           |                                             |
| ----------------------------------------- | ------------------------------------------- |
| ToPrimitive ( input [ , preferredType ] ) | 将输入值转换为原始值。                      |
| OrdinaryToPrimitive ( O, hint )           | 将普通对象转换为原始值。                    |
| ToBoolean ( argument )                    | 将值转换为布尔值。                          |
| ToNumeric ( value )                       | 将值转换为数值。                            |
| ToNumber ( argument )                     | 将值转换为数字。                            |
| ToIntegerOrInfinity ( argument )          | 将值转换为整数或无穷大。                    |
| ToInt32 ( argument )                      | 将值转换为 32 位有符号整数。                |
| ToUint32 ( argument )                     | 将值转换为 32 位无符号整数。                |
| ToInt16 ( argument )                      | 将值转换为 16 位有符号整数。                |
| ToUint16 ( argument )                     | 将值转换为 16 位无符号整数。                |
| ToInt8 ( argument )                       | 将值转换为 8 位有符号整数。                 |
| ToUint8 ( argument )                      | 将值转换为 8 位无符号整数。                 |
| ToUint8Clamp ( argument )                 | 将值转换为 8 位无符号整数（使用截断方式）。 |
| ToBigInt ( argument )                     | 将值转换为 BigInt 类型。                    |
| StringToBigInt ( str )                    | 将字符串转换为 BigInt 类型。                |
| ToBigInt64 ( argument )                   | 将值转换为 64 位有符号 BigInt。             |
| ToBigUint64 ( argument )                  | 将值转换为 64 位无符号 BigInt。             |
| ToString ( argument )                     | 将值转换为字符串。                          |
| ToObject ( argument )                     | 将值转换为对象。                            |
| ToPropertyKey ( argument )                | 将值转换为属性键。                          |
| ToLength ( argument )                     | 将值转换为长度值。                          |
| CanonicalNumericIndexString ( argument )  | 将值转换为规范化的数值索引字符串。          |
| ToIndex ( value )                         | 将值转换为索引值。                          |

| Testing and Comparison Operations        |                                                     |
| ---------------------------------------- | --------------------------------------------------- |
| RequireObjectCoercible ( argument )      | 检查参数是否为对象，如果不是则抛出 TypeError 异常。 |
| IsArray ( argument )                     | 检查参数是否为数组。                                |
| IsCallable ( argument )                  | 检查参数是否为可调用对象。                          |
| IsConstructor ( argument )               | 检查参数是否为构造函数。                            |
| IsExtensible ( O )                       | 检查对象是否可扩展。                                |
| IsIntegralNumber ( argument )            | 检查参数是否为整数。                                |
| IsPropertyKey ( argument )               | 检查参数是否为属性键。                              |
| IsRegExp ( argument )                    | 检查参数是否为正则表达式对象。                      |
| SS: IsStringWellFormedUnicode ( string ) | 检查字符串是否为合法的 Unicode 字符串。             |
| SameValue ( x, y )                       | 比较两个值是否相等，包括 NaN 和+0/-0。              |
| SameValueZero ( x, y )                   | 比较两个值是否相等，不包括 NaN 和+0/-0。            |
| SameValueNonNumber ( x, y )              | 比较两个非数字类型的值是否相等。                    |
| IsLessThan ( x, y, LeftFirst )           | 比较两个值的大小关系。                              |
| IsLooselyEqual ( x, y )                  | 比较两个值是否宽松相等。                            |
| IsStrictlyEqual ( x, y )                 | 比较两个值是否严格相等。                            |

| Operations on Objects          |     |
| ------------------------------ | --- |
| Operations on Iterator Objects |     |

## Executable Code and Execution Contexts (可执行代码和执行上下文)

```text

    可执行代码是指ECMAScript代码中可以被执行的部分，包括函数、模块、脚本等。执行上下文是指ECMAScript代码执行时的环境，包括变量、函数、this值等。

    在ECMAScript中，每个可执行代码都有一个相关联的执行上下文。执行上下文包括以下几个部分：

    变量环境：用于存储变量和函数声明。
    词法环境：用于存储变量和函数的词法绑定。
    this值：用于存储当前函数的this值。
    可执行代码：用于存储当前执行的可执行代码。
    外部环境：用于存储当前执行上下文的外部环境。

```

## Ordinary and Exotic Objects Behaviours (普通对象和异类对象行为)

```text
    普通对象和异类对象在ECMAScript中有以下区别：

    行为：普通对象的行为由ECMAScript规范中的基本行为定义，而异类对象的行为由ECMAScript规范中的异类对象行为定义。
    内部属性：普通对象的内部属性由ECMAScript规范中的基本内部方法定义，而异类对象的内部属性由ECMAScript规范中的异类对象内部方法定义。
    扩展性：普通对象默认是可扩展的，而异类对象默认是不可扩展的。
    原型：普通对象的原型是Object.prototype，而异类对象的原型可以是任何对象。
    构造函数：普通对象的构造函数是Object，而异类对象的构造函数可以是任何函数。
    实例化：普通对象可以通过字面量、构造函数、Object.create()等方式实例化，而异类对象只能通过构造函数实例化。

```

| 异类对象类型                       | 描述                                                     |
| ---------------------------------- | -------------------------------------------------------- |
| Bound Function Exotic Objects      | 绑定函数对象，用于绑定函数的 this 值和参数。             |
| Array Exotic Objects               | 数组对象，用于存储一组有序的值。                         |
| String Exotic Objects              | 字符串对象，用于存储字符串值。                           |
| Arguments Exotic Objects           | 参数对象，用于存储函数的参数。                           |
| Integer-Indexed Exotic Objects     | 整数索引对象，用于存储一组有序的值，并支持整数索引访问。 |
| Module Namespace Exotic Objects    | 模块命名空间对象，用于表示模块的命名空间。               |
| Immutable Prototype Exotic Objects | 不可变原型对象，用于表示不可变的原型对象。               |

## ECMAScript Language: Expressions (ECMAScript 语言表达式)

| 表达式类型                                   | 描述                                                         |
| -------------------------------------------- | ------------------------------------------------------------ |
| 标识符（Identifiers）                        | 用于表示变量、函数或对象的名称。                             |
| 主表达式（Primary Expression）               | 包括字面量、标识符、括号表达式等。                           |
| 左手表达式（Left-Hand-Side Expressions）     | 用于赋值操作的表达式，包括标识符、属性访问、数组索引等。     |
| 更新表达式（Update Expressions）             | 用于增加或减少变量值的表达式，包括前缀和后缀递增递减运算符。 |
| 一元运算符（Unary Operators）                | 对单个操作数进行操作的运算符，如取反、递增递减、类型转换等。 |
| 指数运算符（Exponentiation Operator）        | 用于计算指数的运算符。                                       |
| 乘法运算符（Multiplicative Operators）       | 用于执行乘法、除法和取模运算的运算符。                       |
| 加法运算符（Additive Operators）             | 用于执行加法和减法运算的运算符。                             |
| 位移运算符（Bitwise Shift Operators）        | 用于执行二进制位移操作的运算符。                             |
| 关系运算符（Relational Operators）           | 用于比较两个值的大小关系的运算符。                           |
| 相等运算符（Equality Operators）             | 用于比较两个值是否相等的运算符。                             |
| 二进制位运算符（Binary Bitwise Operators）   | 用于执行二进制位运算的运算符，如按位与、按位或等。           |
| 二进制逻辑运算符（Binary Logical Operators） | 用于执行二进制逻辑运算的运算符，如逻辑与、逻辑或等。         |
| 条件运算符（Conditional Operator）           | 也称为三元运算符，根据条件的真假选择不同的值或表达式。       |
| 赋值运算符（Assignment Operators）           | 用于将值赋给变量或对象属性的运算符。                         |
| 逗号运算符（Comma Operator）                 | 用于在表达式中多个表达式之间进行分隔的运算符。               |

> 左手表达式
> | 章节 | 描述 |
> | --- | --- |
> | 静态语义（Static Semantics） | 描述左手表达式的静态语义规则。 |
> | 属性访问器（Property Accessors） | 描述通过点运算符和方括号运算符进行属性访问的语法和行为。 |
> | 使用表达式键进行属性访问的求值过程（EvaluatePropertyAccessWithExpressionKey） | 描述使用表达式作为属性键进行属性访问的求值过程。 |
> | 使用标识符键进行属性访问的求值过程（EvaluatePropertyAccessWithIdentifierKey） | 描述使用标识符作为属性键进行属性访问的求值过程。 |
> | new 运算符（The new Operator） | 描述使用 new 运算符创建对象实例的语法和行为。 |
> | 函数调用（Function Calls） | 描述函数调用的语法和行为，包括参数传递和执行函数体。 |
> | super 关键字（The super Keyword） | 描述 super 关键字在继承关系中的使用和语义。 |
> | 参数列表（Argument Lists） | 描述函数调用中的参数列表的语法和行为。 |
> | 可选链（Optional Chains） | 描述可选链操作符的语法和行为，用于安全地访问可能为 null 或 undefined 的属性。 |
> | import 调用（Import Calls） | 描述使用 import 语法进行模块导入的语法和行为。 |
> | 标记模板（Tagged Templates） | 描述标记模板字符串的语法和行为，用于自定义模板字符串的处理方式。 |
> | 元属性（Meta Properties） | 描述元属性的语法和行为，用于访问特定的元数据信息。 |

> https://262.ecma-international.org/14.0/#sec-new-operator

- 定义了 new 关键有哪些操作

> https://262.ecma-international.org/14.0/#sec-this-keyword

- 定义了 this 指向


## ECMAScript Language: Statements and Declarations（语句和声明）

| 章节 | 描述 |
| --- | --- |
| 语句语义（Statement Semantics） | 描述语句的语义和执行顺序。 |
| 块语句（Block） | 描述用花括号括起来的一组语句的语法和行为。 |
| 声明和变量声明语句（Declarations and the Variable Statement） | 描述变量和函数声明的语法和行为。 |
| 空语句（Empty Statement） | 描述一个空语句的语法和行为。 |
| 表达式语句（Expression Statement） | 描述将表达式作为语句的语法和行为。 |
| if语句（The if Statement） | 描述条件语句的语法和行为，用于根据条件执行不同的代码块。 |
| 迭代语句（Iteration Statements） | 描述循环语句的语法和行为，如for循环、while循环等。 |
| continue语句（The continue Statement） | 描述continue语句的语法和行为，用于跳过当前循环的剩余部分。 |
| break语句（The break Statement） | 描述break语句的语法和行为，用于跳出当前循环或switch语句。 |
| return语句（The return Statement） | 描述return语句的语法和行为，用于从函数中返回一个值。 |
| with语句（The with Statement） | 描述with语句的语法和行为，用于创建一个临时的作用域链。 |
| switch语句（The switch Statement） | 描述switch语句的语法和行为，用于根据不同的条件执行不同的代码块。 |
| 标记语句（Labelled Statements） | 描述标记语句的语法和行为，用于在代码中创建标记以供其他语句引用。 |
| throw语句（The throw Statement） | 描述throw语句的语法和行为，用于抛出一个异常。 |
| try语句（The try Statement） | 描述try语句的语法和行为，用于捕获和处理异常。 |
| debugger语句（The debugger Statement） | 描述debugger语句的语法和行为，用于在代码中设置断点。 |


## ECMAScript Language: Functions and Classes （函数和类）


| 章节 | 描述 |
| --- | --- |
| 参数列表（Parameter Lists） | 描述函数或方法定义中的参数列表的语法和行为。 |
| 函数定义（Function Definitions） | 描述使用function关键字定义函数的语法和行为。 |
| 箭头函数定义（Arrow Function Definitions） | 描述使用箭头函数语法定义函数的语法和行为。 |
| 方法定义（Method Definitions） | 描述在对象或类中定义方法的语法和行为。 |
| 生成器函数定义（Generator Function Definitions） | 描述使用function关键字定义生成器函数的语法和行为。 |
| 异步生成器函数定义（Async Generator Function Definitions） | 描述使用async关键字定义异步生成器函数的语法和行为。 |
| 类定义（Class Definitions） | 描述使用class关键字定义类的语法和行为。 |
| 异步函数定义（Async Function Definitions） | 描述使用async关键字定义异步函数的语法和行为。 |
| 异步箭头函数定义（Async Arrow Function Definitions） | 描述使用箭头函数语法定义异步函数的语法和行为。 |
| 尾部位置调用（Tail Position Calls） | 描述尾部位置调用的语法和行为，用于优化递归函数的性能。 |

## Structured Data （结构化数据）

| 章节 | 描述 |
| --- | --- |
| JSON对象（The JSON Object） | 描述了ECMAScript语言中的JSON对象和JSON字符串的解析和序列化。 |
| ArrayBuffer对象（The ArrayBuffer Object） | 描述了ECMAScript语言中的ArrayBuffer对象和二进制数据的处理。 |
| DataView对象（The DataView Object） | 描述了ECMAScript语言中的DataView对象和二进制数据的读写操作。 |
| TypedArray对象（The TypedArray Objects） | 描述了ECMAScript语言中的TypedArray对象和基于ArrayBuffer的类型化数组。 |
| SharedArrayBuffer对象（The SharedArrayBuffer Object） | 描述了ECMAScript语言中的SharedArrayBuffer对象和多线程共享内存的处理。 |
| Atomics对象（The Atomics Object） | 描述了ECMAScript语言中的Atomics对象和原子操作的处理。 |


## Control Abstraction Objects （控制抽象对象）

| 章节 | 描述 |
| --- | --- |
| 迭代器协议（The Iterator Protocol） | 描述了ECMAScript语言中的迭代器协议和可迭代对象的处理。 |
| Promise对象（Promise Objects） | 描述了ECMAScript语言中的Promise对象和异步编程的处理。 |
| GeneratorFunction对象（GeneratorFunction Objects） | 描述了ECMAScript语言中的GeneratorFunction对象和生成器函数的处理。 |
| AsyncGeneratorFunction对象（AsyncGeneratorFunction Objects） | 描述了ECMAScript语言中的AsyncGeneratorFunction对象和异步生成器函数的处理。 |
| Generator对象（Generator Objects） | 描述了ECMAScript语言中的Generator对象和生成器的处理。 |
| AsyncGenerator对象（AsyncGenerator Objects） | 描述了ECMAScript语言中的AsyncGenerator对象和异步生成器的处理。 |
| AsyncFunction对象（AsyncFunction Objects） | 描述了ECMAScript语言中的AsyncFunction对象和异步函数的处理。 |