import{_ as t,o as e,c as s,Q as a}from"./chunks/framework.4582f8ba.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"home/js/summery.md","filePath":"home/js/summery.md"}'),n={name:"home/js/summery.md"},r=a(`<p>Ecmascript</p><h2 id="ecmascript-data-types-and-values" tabindex="-1">ECMAScript Data Types and Values <a class="header-anchor" href="#ecmascript-data-types-and-values" aria-label="Permalink to &quot;ECMAScript Data Types and Values&quot;">​</a></h2><blockquote><p>ECMAScript Language Types (ECMAScript 语言类型:可以直接操作的类型值)</p></blockquote><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"> The Undefined Type</span></span>
<span class="line"><span style="color:#e1e4e8;"> The Null Type</span></span>
<span class="line"><span style="color:#e1e4e8;"> The Boolean Type</span></span>
<span class="line"><span style="color:#e1e4e8;"> The String Type</span></span>
<span class="line"><span style="color:#e1e4e8;"> The Symbol Type</span></span>
<span class="line"><span style="color:#e1e4e8;"> Numeric Types</span></span>
<span class="line"><span style="color:#e1e4e8;">    The Number Type</span></span>
<span class="line"><span style="color:#e1e4e8;">    The BigInt Type</span></span>
<span class="line"><span style="color:#e1e4e8;"> The Object Type</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"> The Undefined Type</span></span>
<span class="line"><span style="color:#24292e;"> The Null Type</span></span>
<span class="line"><span style="color:#24292e;"> The Boolean Type</span></span>
<span class="line"><span style="color:#24292e;"> The String Type</span></span>
<span class="line"><span style="color:#24292e;"> The Symbol Type</span></span>
<span class="line"><span style="color:#24292e;"> Numeric Types</span></span>
<span class="line"><span style="color:#24292e;">    The Number Type</span></span>
<span class="line"><span style="color:#24292e;">    The BigInt Type</span></span>
<span class="line"><span style="color:#24292e;"> The Object Type</span></span></code></pre></div><blockquote><p>ECMAScript Specification Types (ECMAScript 规范类型: 不能操作的 描述语言的语义和行为的)</p></blockquote><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">A specification type corresponds to meta-values that are used within algorithms to describe the semantics of ECMAScript language constructs and ECMAScript language types. The specification types include Reference, List, Completion Record, Property Descriptor, Environment Record, Abstract Closure, and Data Block. Specification type values are specification artefacts that do not necessarily correspond to any specific entity within an ECMAScript implementation. Specification type values may be used to describe intermediate results of ECMAScript expression evaluation but such values cannot be stored as properties of objects or values of ECMAScript language variables.</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">规范类型对应于算法中使用的元值，用于描述 ECMAScript 语言构造和 ECMAScript 语言类型的语义。规范类型包括引用、列表、完成记录、属性描述符、环境记录、抽象闭包和数据块。规范类型值是规范工件，不一定对应于 ECMAScript 实现中的任何特定实体。规范类型值可用于描述 ECMAScript 表达式求值的中间结果，但此类值不能存储为对象的属性或 ECMAScript 语言变量的值。</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">The Enum Specification Type：枚举类型，用于表示一组有限的命名常量值。</span></span>
<span class="line"><span style="color:#e1e4e8;">The List and Record Specification Types：列表和记录类型，用于表示一组有序的值和一组键值对。</span></span>
<span class="line"><span style="color:#e1e4e8;">The Set and Relation Specification Types：集合和关系类型，用于表示一组无序的唯一值和一组有序的键值对。</span></span>
<span class="line"><span style="color:#e1e4e8;">The Completion Record Specification Type：完成记录类型，用于表示语句或表达式的执行结果。</span></span>
<span class="line"><span style="color:#e1e4e8;">The Reference Record Specification Type：引用记录类型，用于表示对变量或属性的引用。</span></span>
<span class="line"><span style="color:#e1e4e8;">The Property Descriptor Specification Type：属性描述符类型，用于表示对象属性的特性和行为。</span></span>
<span class="line"><span style="color:#e1e4e8;">The Environment Record Specification Type：环境记录类型，用于表示变量和函数的作用域和绑定关系。</span></span>
<span class="line"><span style="color:#e1e4e8;">The Abstract Closure Specification Type：抽象闭包类型，用于表示函数的内部状态和执行上下文。</span></span>
<span class="line"><span style="color:#e1e4e8;">Data Blocks：数据块类型，用于表示二进制数据的缓冲区。</span></span>
<span class="line"><span style="color:#e1e4e8;">The PrivateElement Specification Type：私有元素类型，用于表示类中的私有成员。</span></span>
<span class="line"><span style="color:#e1e4e8;">The ClassFieldDefinition Record Specification Type：类字段定义记录类型，用于表示类中的字段定义。</span></span>
<span class="line"><span style="color:#e1e4e8;">Private Names：私有名称类型，用于表示类中的私有成员名称。</span></span>
<span class="line"><span style="color:#e1e4e8;">The ClassStaticBlockDefinition Record Specification Type：类静态块定义记录类型，用于表示类中的静态块定义。</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">A specification type corresponds to meta-values that are used within algorithms to describe the semantics of ECMAScript language constructs and ECMAScript language types. The specification types include Reference, List, Completion Record, Property Descriptor, Environment Record, Abstract Closure, and Data Block. Specification type values are specification artefacts that do not necessarily correspond to any specific entity within an ECMAScript implementation. Specification type values may be used to describe intermediate results of ECMAScript expression evaluation but such values cannot be stored as properties of objects or values of ECMAScript language variables.</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">规范类型对应于算法中使用的元值，用于描述 ECMAScript 语言构造和 ECMAScript 语言类型的语义。规范类型包括引用、列表、完成记录、属性描述符、环境记录、抽象闭包和数据块。规范类型值是规范工件，不一定对应于 ECMAScript 实现中的任何特定实体。规范类型值可用于描述 ECMAScript 表达式求值的中间结果，但此类值不能存储为对象的属性或 ECMAScript 语言变量的值。</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">The Enum Specification Type：枚举类型，用于表示一组有限的命名常量值。</span></span>
<span class="line"><span style="color:#24292e;">The List and Record Specification Types：列表和记录类型，用于表示一组有序的值和一组键值对。</span></span>
<span class="line"><span style="color:#24292e;">The Set and Relation Specification Types：集合和关系类型，用于表示一组无序的唯一值和一组有序的键值对。</span></span>
<span class="line"><span style="color:#24292e;">The Completion Record Specification Type：完成记录类型，用于表示语句或表达式的执行结果。</span></span>
<span class="line"><span style="color:#24292e;">The Reference Record Specification Type：引用记录类型，用于表示对变量或属性的引用。</span></span>
<span class="line"><span style="color:#24292e;">The Property Descriptor Specification Type：属性描述符类型，用于表示对象属性的特性和行为。</span></span>
<span class="line"><span style="color:#24292e;">The Environment Record Specification Type：环境记录类型，用于表示变量和函数的作用域和绑定关系。</span></span>
<span class="line"><span style="color:#24292e;">The Abstract Closure Specification Type：抽象闭包类型，用于表示函数的内部状态和执行上下文。</span></span>
<span class="line"><span style="color:#24292e;">Data Blocks：数据块类型，用于表示二进制数据的缓冲区。</span></span>
<span class="line"><span style="color:#24292e;">The PrivateElement Specification Type：私有元素类型，用于表示类中的私有成员。</span></span>
<span class="line"><span style="color:#24292e;">The ClassFieldDefinition Record Specification Type：类字段定义记录类型，用于表示类中的字段定义。</span></span>
<span class="line"><span style="color:#24292e;">Private Names：私有名称类型，用于表示类中的私有成员名称。</span></span>
<span class="line"><span style="color:#24292e;">The ClassStaticBlockDefinition Record Specification Type：类静态块定义记录类型，用于表示类中的静态块定义。</span></span></code></pre></div><h2 id="abstract-operations-抽象操作" tabindex="-1">Abstract Operations （抽象操作） <a class="header-anchor" href="#abstract-operations-抽象操作" aria-label="Permalink to &quot;Abstract Operations （抽象操作）&quot;">​</a></h2><ul><li>描述语言的底层行为和算法； 包括类型转换，测试和比较的操作，对象的操作定义</li></ul><table><thead><tr><th>Type Conversion</th><th></th></tr></thead><tbody><tr><td>ToPrimitive ( input [ , preferredType ] )</td><td>将输入值转换为原始值。</td></tr><tr><td>OrdinaryToPrimitive ( O, hint )</td><td>将普通对象转换为原始值。</td></tr><tr><td>ToBoolean ( argument )</td><td>将值转换为布尔值。</td></tr><tr><td>ToNumeric ( value )</td><td>将值转换为数值。</td></tr><tr><td>ToNumber ( argument )</td><td>将值转换为数字。</td></tr><tr><td>ToIntegerOrInfinity ( argument )</td><td>将值转换为整数或无穷大。</td></tr><tr><td>ToInt32 ( argument )</td><td>将值转换为 32 位有符号整数。</td></tr><tr><td>ToUint32 ( argument )</td><td>将值转换为 32 位无符号整数。</td></tr><tr><td>ToInt16 ( argument )</td><td>将值转换为 16 位有符号整数。</td></tr><tr><td>ToUint16 ( argument )</td><td>将值转换为 16 位无符号整数。</td></tr><tr><td>ToInt8 ( argument )</td><td>将值转换为 8 位有符号整数。</td></tr><tr><td>ToUint8 ( argument )</td><td>将值转换为 8 位无符号整数。</td></tr><tr><td>ToUint8Clamp ( argument )</td><td>将值转换为 8 位无符号整数（使用截断方式）。</td></tr><tr><td>ToBigInt ( argument )</td><td>将值转换为 BigInt 类型。</td></tr><tr><td>StringToBigInt ( str )</td><td>将字符串转换为 BigInt 类型。</td></tr><tr><td>ToBigInt64 ( argument )</td><td>将值转换为 64 位有符号 BigInt。</td></tr><tr><td>ToBigUint64 ( argument )</td><td>将值转换为 64 位无符号 BigInt。</td></tr><tr><td>ToString ( argument )</td><td>将值转换为字符串。</td></tr><tr><td>ToObject ( argument )</td><td>将值转换为对象。</td></tr><tr><td>ToPropertyKey ( argument )</td><td>将值转换为属性键。</td></tr><tr><td>ToLength ( argument )</td><td>将值转换为长度值。</td></tr><tr><td>CanonicalNumericIndexString ( argument )</td><td>将值转换为规范化的数值索引字符串。</td></tr><tr><td>ToIndex ( value )</td><td>将值转换为索引值。</td></tr></tbody></table><table><thead><tr><th>Testing and Comparison Operations</th><th></th></tr></thead><tbody><tr><td>RequireObjectCoercible ( argument )</td><td>检查参数是否为对象，如果不是则抛出 TypeError 异常。</td></tr><tr><td>IsArray ( argument )</td><td>检查参数是否为数组。</td></tr><tr><td>IsCallable ( argument )</td><td>检查参数是否为可调用对象。</td></tr><tr><td>IsConstructor ( argument )</td><td>检查参数是否为构造函数。</td></tr><tr><td>IsExtensible ( O )</td><td>检查对象是否可扩展。</td></tr><tr><td>IsIntegralNumber ( argument )</td><td>检查参数是否为整数。</td></tr><tr><td>IsPropertyKey ( argument )</td><td>检查参数是否为属性键。</td></tr><tr><td>IsRegExp ( argument )</td><td>检查参数是否为正则表达式对象。</td></tr><tr><td>SS: IsStringWellFormedUnicode ( string )</td><td>检查字符串是否为合法的 Unicode 字符串。</td></tr><tr><td>SameValue ( x, y )</td><td>比较两个值是否相等，包括 NaN 和+0/-0。</td></tr><tr><td>SameValueZero ( x, y )</td><td>比较两个值是否相等，不包括 NaN 和+0/-0。</td></tr><tr><td>SameValueNonNumber ( x, y )</td><td>比较两个非数字类型的值是否相等。</td></tr><tr><td>IsLessThan ( x, y, LeftFirst )</td><td>比较两个值的大小关系。</td></tr><tr><td>IsLooselyEqual ( x, y )</td><td>比较两个值是否宽松相等。</td></tr><tr><td>IsStrictlyEqual ( x, y )</td><td>比较两个值是否严格相等。</td></tr></tbody></table><table><thead><tr><th>Operations on Objects</th><th></th></tr></thead><tbody><tr><td>Operations on Iterator Objects</td><td></td></tr></tbody></table><h2 id="executable-code-and-execution-contexts-可执行代码和执行上下文" tabindex="-1">Executable Code and Execution Contexts (可执行代码和执行上下文) <a class="header-anchor" href="#executable-code-and-execution-contexts-可执行代码和执行上下文" aria-label="Permalink to &quot;Executable Code and Execution Contexts (可执行代码和执行上下文)&quot;">​</a></h2><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    可执行代码是指ECMAScript代码中可以被执行的部分，包括函数、模块、脚本等。执行上下文是指ECMAScript代码执行时的环境，包括变量、函数、this值等。</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    在ECMAScript中，每个可执行代码都有一个相关联的执行上下文。执行上下文包括以下几个部分：</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    变量环境：用于存储变量和函数声明。</span></span>
<span class="line"><span style="color:#e1e4e8;">    词法环境：用于存储变量和函数的词法绑定。</span></span>
<span class="line"><span style="color:#e1e4e8;">    this值：用于存储当前函数的this值。</span></span>
<span class="line"><span style="color:#e1e4e8;">    可执行代码：用于存储当前执行的可执行代码。</span></span>
<span class="line"><span style="color:#e1e4e8;">    外部环境：用于存储当前执行上下文的外部环境。</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    可执行代码是指ECMAScript代码中可以被执行的部分，包括函数、模块、脚本等。执行上下文是指ECMAScript代码执行时的环境，包括变量、函数、this值等。</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    在ECMAScript中，每个可执行代码都有一个相关联的执行上下文。执行上下文包括以下几个部分：</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    变量环境：用于存储变量和函数声明。</span></span>
<span class="line"><span style="color:#24292e;">    词法环境：用于存储变量和函数的词法绑定。</span></span>
<span class="line"><span style="color:#24292e;">    this值：用于存储当前函数的this值。</span></span>
<span class="line"><span style="color:#24292e;">    可执行代码：用于存储当前执行的可执行代码。</span></span>
<span class="line"><span style="color:#24292e;">    外部环境：用于存储当前执行上下文的外部环境。</span></span></code></pre></div><h2 id="ordinary-and-exotic-objects-behaviours-普通对象和异类对象行为" tabindex="-1">Ordinary and Exotic Objects Behaviours (普通对象和异类对象行为) <a class="header-anchor" href="#ordinary-and-exotic-objects-behaviours-普通对象和异类对象行为" aria-label="Permalink to &quot;Ordinary and Exotic Objects Behaviours (普通对象和异类对象行为)&quot;">​</a></h2><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">    普通对象和异类对象在ECMAScript中有以下区别：</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    行为：普通对象的行为由ECMAScript规范中的基本行为定义，而异类对象的行为由ECMAScript规范中的异类对象行为定义。</span></span>
<span class="line"><span style="color:#e1e4e8;">    内部属性：普通对象的内部属性由ECMAScript规范中的基本内部方法定义，而异类对象的内部属性由ECMAScript规范中的异类对象内部方法定义。</span></span>
<span class="line"><span style="color:#e1e4e8;">    扩展性：普通对象默认是可扩展的，而异类对象默认是不可扩展的。</span></span>
<span class="line"><span style="color:#e1e4e8;">    原型：普通对象的原型是Object.prototype，而异类对象的原型可以是任何对象。</span></span>
<span class="line"><span style="color:#e1e4e8;">    构造函数：普通对象的构造函数是Object，而异类对象的构造函数可以是任何函数。</span></span>
<span class="line"><span style="color:#e1e4e8;">    实例化：普通对象可以通过字面量、构造函数、Object.create()等方式实例化，而异类对象只能通过构造函数实例化。</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">    普通对象和异类对象在ECMAScript中有以下区别：</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    行为：普通对象的行为由ECMAScript规范中的基本行为定义，而异类对象的行为由ECMAScript规范中的异类对象行为定义。</span></span>
<span class="line"><span style="color:#24292e;">    内部属性：普通对象的内部属性由ECMAScript规范中的基本内部方法定义，而异类对象的内部属性由ECMAScript规范中的异类对象内部方法定义。</span></span>
<span class="line"><span style="color:#24292e;">    扩展性：普通对象默认是可扩展的，而异类对象默认是不可扩展的。</span></span>
<span class="line"><span style="color:#24292e;">    原型：普通对象的原型是Object.prototype，而异类对象的原型可以是任何对象。</span></span>
<span class="line"><span style="color:#24292e;">    构造函数：普通对象的构造函数是Object，而异类对象的构造函数可以是任何函数。</span></span>
<span class="line"><span style="color:#24292e;">    实例化：普通对象可以通过字面量、构造函数、Object.create()等方式实例化，而异类对象只能通过构造函数实例化。</span></span></code></pre></div><table><thead><tr><th>异类对象类型</th><th>描述</th></tr></thead><tbody><tr><td>Bound Function Exotic Objects</td><td>绑定函数对象，用于绑定函数的 this 值和参数。</td></tr><tr><td>Array Exotic Objects</td><td>数组对象，用于存储一组有序的值。</td></tr><tr><td>String Exotic Objects</td><td>字符串对象，用于存储字符串值。</td></tr><tr><td>Arguments Exotic Objects</td><td>参数对象，用于存储函数的参数。</td></tr><tr><td>Integer-Indexed Exotic Objects</td><td>整数索引对象，用于存储一组有序的值，并支持整数索引访问。</td></tr><tr><td>Module Namespace Exotic Objects</td><td>模块命名空间对象，用于表示模块的命名空间。</td></tr><tr><td>Immutable Prototype Exotic Objects</td><td>不可变原型对象，用于表示不可变的原型对象。</td></tr></tbody></table><h2 id="ecmascript-language-expressions-ecmascript-语言表达式" tabindex="-1">ECMAScript Language: Expressions (ECMAScript 语言表达式) <a class="header-anchor" href="#ecmascript-language-expressions-ecmascript-语言表达式" aria-label="Permalink to &quot;ECMAScript Language: Expressions (ECMAScript 语言表达式)&quot;">​</a></h2><table><thead><tr><th>表达式类型</th><th>描述</th></tr></thead><tbody><tr><td>标识符（Identifiers）</td><td>用于表示变量、函数或对象的名称。</td></tr><tr><td>主表达式（Primary Expression）</td><td>包括字面量、标识符、括号表达式等。</td></tr><tr><td>左手表达式（Left-Hand-Side Expressions）</td><td>用于赋值操作的表达式，包括标识符、属性访问、数组索引等。</td></tr><tr><td>更新表达式（Update Expressions）</td><td>用于增加或减少变量值的表达式，包括前缀和后缀递增递减运算符。</td></tr><tr><td>一元运算符（Unary Operators）</td><td>对单个操作数进行操作的运算符，如取反、递增递减、类型转换等。</td></tr><tr><td>指数运算符（Exponentiation Operator）</td><td>用于计算指数的运算符。</td></tr><tr><td>乘法运算符（Multiplicative Operators）</td><td>用于执行乘法、除法和取模运算的运算符。</td></tr><tr><td>加法运算符（Additive Operators）</td><td>用于执行加法和减法运算的运算符。</td></tr><tr><td>位移运算符（Bitwise Shift Operators）</td><td>用于执行二进制位移操作的运算符。</td></tr><tr><td>关系运算符（Relational Operators）</td><td>用于比较两个值的大小关系的运算符。</td></tr><tr><td>相等运算符（Equality Operators）</td><td>用于比较两个值是否相等的运算符。</td></tr><tr><td>二进制位运算符（Binary Bitwise Operators）</td><td>用于执行二进制位运算的运算符，如按位与、按位或等。</td></tr><tr><td>二进制逻辑运算符（Binary Logical Operators）</td><td>用于执行二进制逻辑运算的运算符，如逻辑与、逻辑或等。</td></tr><tr><td>条件运算符（Conditional Operator）</td><td>也称为三元运算符，根据条件的真假选择不同的值或表达式。</td></tr><tr><td>赋值运算符（Assignment Operators）</td><td>用于将值赋给变量或对象属性的运算符。</td></tr><tr><td>逗号运算符（Comma Operator）</td><td>用于在表达式中多个表达式之间进行分隔的运算符。</td></tr></tbody></table><blockquote><p>左手表达式</p><table><thead><tr><th>章节</th><th>描述</th></tr></thead><tbody><tr><td>静态语义（Static Semantics）</td><td>描述左手表达式的静态语义规则。</td></tr><tr><td>属性访问器（Property Accessors）</td><td>描述通过点运算符和方括号运算符进行属性访问的语法和行为。</td></tr><tr><td>使用表达式键进行属性访问的求值过程（EvaluatePropertyAccessWithExpressionKey）</td><td>描述使用表达式作为属性键进行属性访问的求值过程。</td></tr><tr><td>使用标识符键进行属性访问的求值过程（EvaluatePropertyAccessWithIdentifierKey）</td><td>描述使用标识符作为属性键进行属性访问的求值过程。</td></tr><tr><td>new 运算符（The new Operator）</td><td>描述使用 new 运算符创建对象实例的语法和行为。</td></tr><tr><td>函数调用（Function Calls）</td><td>描述函数调用的语法和行为，包括参数传递和执行函数体。</td></tr><tr><td>super 关键字（The super Keyword）</td><td>描述 super 关键字在继承关系中的使用和语义。</td></tr><tr><td>参数列表（Argument Lists）</td><td>描述函数调用中的参数列表的语法和行为。</td></tr><tr><td>可选链（Optional Chains）</td><td>描述可选链操作符的语法和行为，用于安全地访问可能为 null 或 undefined 的属性。</td></tr><tr><td>import 调用（Import Calls）</td><td>描述使用 import 语法进行模块导入的语法和行为。</td></tr><tr><td>标记模板（Tagged Templates）</td><td>描述标记模板字符串的语法和行为，用于自定义模板字符串的处理方式。</td></tr><tr><td>元属性（Meta Properties）</td><td>描述元属性的语法和行为，用于访问特定的元数据信息。</td></tr></tbody></table></blockquote><blockquote><p><a href="https://262.ecma-international.org/14.0/#sec-new-operator" target="_blank" rel="noreferrer">https://262.ecma-international.org/14.0/#sec-new-operator</a></p></blockquote><ul><li>定义了 new 关键有哪些操作</li></ul><blockquote><p><a href="https://262.ecma-international.org/14.0/#sec-this-keyword" target="_blank" rel="noreferrer">https://262.ecma-international.org/14.0/#sec-this-keyword</a></p></blockquote><ul><li>定义了 this 指向</li></ul><h2 id="ecmascript-language-statements-and-declarations-语句和声明" tabindex="-1">ECMAScript Language: Statements and Declarations（语句和声明） <a class="header-anchor" href="#ecmascript-language-statements-and-declarations-语句和声明" aria-label="Permalink to &quot;ECMAScript Language: Statements and Declarations（语句和声明）&quot;">​</a></h2><table><thead><tr><th>章节</th><th>描述</th></tr></thead><tbody><tr><td>语句语义（Statement Semantics）</td><td>描述语句的语义和执行顺序。</td></tr><tr><td>块语句（Block）</td><td>描述用花括号括起来的一组语句的语法和行为。</td></tr><tr><td>声明和变量声明语句（Declarations and the Variable Statement）</td><td>描述变量和函数声明的语法和行为。</td></tr><tr><td>空语句（Empty Statement）</td><td>描述一个空语句的语法和行为。</td></tr><tr><td>表达式语句（Expression Statement）</td><td>描述将表达式作为语句的语法和行为。</td></tr><tr><td>if语句（The if Statement）</td><td>描述条件语句的语法和行为，用于根据条件执行不同的代码块。</td></tr><tr><td>迭代语句（Iteration Statements）</td><td>描述循环语句的语法和行为，如for循环、while循环等。</td></tr><tr><td>continue语句（The continue Statement）</td><td>描述continue语句的语法和行为，用于跳过当前循环的剩余部分。</td></tr><tr><td>break语句（The break Statement）</td><td>描述break语句的语法和行为，用于跳出当前循环或switch语句。</td></tr><tr><td>return语句（The return Statement）</td><td>描述return语句的语法和行为，用于从函数中返回一个值。</td></tr><tr><td>with语句（The with Statement）</td><td>描述with语句的语法和行为，用于创建一个临时的作用域链。</td></tr><tr><td>switch语句（The switch Statement）</td><td>描述switch语句的语法和行为，用于根据不同的条件执行不同的代码块。</td></tr><tr><td>标记语句（Labelled Statements）</td><td>描述标记语句的语法和行为，用于在代码中创建标记以供其他语句引用。</td></tr><tr><td>throw语句（The throw Statement）</td><td>描述throw语句的语法和行为，用于抛出一个异常。</td></tr><tr><td>try语句（The try Statement）</td><td>描述try语句的语法和行为，用于捕获和处理异常。</td></tr><tr><td>debugger语句（The debugger Statement）</td><td>描述debugger语句的语法和行为，用于在代码中设置断点。</td></tr></tbody></table><h2 id="ecmascript-language-functions-and-classes-函数和类" tabindex="-1">ECMAScript Language: Functions and Classes （函数和类） <a class="header-anchor" href="#ecmascript-language-functions-and-classes-函数和类" aria-label="Permalink to &quot;ECMAScript Language: Functions and Classes （函数和类）&quot;">​</a></h2><table><thead><tr><th>章节</th><th>描述</th></tr></thead><tbody><tr><td>参数列表（Parameter Lists）</td><td>描述函数或方法定义中的参数列表的语法和行为。</td></tr><tr><td>函数定义（Function Definitions）</td><td>描述使用function关键字定义函数的语法和行为。</td></tr><tr><td>箭头函数定义（Arrow Function Definitions）</td><td>描述使用箭头函数语法定义函数的语法和行为。</td></tr><tr><td>方法定义（Method Definitions）</td><td>描述在对象或类中定义方法的语法和行为。</td></tr><tr><td>生成器函数定义（Generator Function Definitions）</td><td>描述使用function关键字定义生成器函数的语法和行为。</td></tr><tr><td>异步生成器函数定义（Async Generator Function Definitions）</td><td>描述使用async关键字定义异步生成器函数的语法和行为。</td></tr><tr><td>类定义（Class Definitions）</td><td>描述使用class关键字定义类的语法和行为。</td></tr><tr><td>异步函数定义（Async Function Definitions）</td><td>描述使用async关键字定义异步函数的语法和行为。</td></tr><tr><td>异步箭头函数定义（Async Arrow Function Definitions）</td><td>描述使用箭头函数语法定义异步函数的语法和行为。</td></tr><tr><td>尾部位置调用（Tail Position Calls）</td><td>描述尾部位置调用的语法和行为，用于优化递归函数的性能。</td></tr></tbody></table>`,27),p=[r];function o(l,i,d,c,y,h){return e(),s("div",null,p)}const b=t(n,[["render",o]]);export{m as __pageData,b as default};
