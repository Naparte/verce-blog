# 执⾏上下⽂

- 解释一：⼀段 JavaScript 代码在执⾏之前需要被 JavaScript 引擎编译，编译完成之后，才会进⼊执⾏阶段。代码经过编译后会生成执行上下文(Execution Context)和可执行代码(Executable Code)
- 解释二：JavaScript 引擎并⾮⼀⾏⼀⾏地分析和执⾏程序，⽽是⼀段⼀段地分析执⾏。当执⾏⼀段代码的时候，会进⾏⼀个“准备⼯作”，这⾥的“准备⼯作”，更专业⼀点的说法，就叫做"执⾏上下⽂( execution context )"

## 执⾏上下⽂栈

> JavaScript 引擎创建了执⾏上下⽂栈（Execution context stack，ECS）来管理执⾏上下⽂

- 当 JavaScript 遇到下⾯的这段代码

```javascript
function fun3() {
  console.log("fun3");
}
function fun2() {
  fun3();
}
function fun1() {
  fun2();
}
fun1();
```

```javascript
// 伪代码
ECStack = [];
ECStack = [globalContext];

// fun1()
ECStack.push(fun1_functionContext);

// fun1中竟然调⽤了fun2，还要创建fun2的执⾏上下⽂
ECStack.push(fun2_functionContext);

// 擦，fun2还调⽤了fun3！
ECStack.push(fun3_functionContext);

// fun3执⾏完毕
ECStack.pop();

// fun2执⾏完毕
ECStack.pop();

// fun1执⾏完毕
ECStack.pop();

// javascript接着执⾏下⾯的代码，但是ECStack底层永远有个globalContext
```

## 上下文 之 变量对象

> `对于每个执⾏上下⽂，都有三个重要属性：`

1. 变量对象( Variable object ，VO)
2. 作⽤域链( Scope chain )
3. this

> 全局上下⽂

1. 全局对象是预定义的对象，作为 JavaScript 的全局函数和全局属性的占位符。通过使⽤全局对象，可以访问所有其他所有预定义的对象、函数和属性。
2. 在顶层 JavaScript 代码中，可以⽤关键字 this 引⽤全局对象。因为全局对象是作⽤域链的头，这意味着所有⾮限定性的变量和函数名都会作为该对象的属性来查询。
3. 例如，当 JavaScript
   代码引⽤
   parseInt()函数时，它引⽤的是全局对象的 parseInt 属性。全局对象是作⽤域链的头，还意味着在顶层 JavaScript 代码中声明的所有变量都将成为全局对象的属性。

- `简单点说: 在客户端 JavaScript 中，全局对象就是 Window 对象`

> 函数上下⽂

- 在函数上下⽂中，⽤活动对象( activation object, AO)来表示变量对象

> 函数执⾏过程

- 执⾏上下⽂的代码会分成两个阶段进⾏处理：分析和执⾏，也可以叫做：

1. 进⼊执⾏上下⽂；
2. 代码执⾏；

变量对象会包括：

1. 函数的所有形参(如果是函数上下⽂)
   - 由名称和对应值组成的⼀个变量对象的属性被创建
   - 没有实参，属性值设为 undefined
2. 函数声明
   - 由名称和对应值（函数对象(function-object)）组成⼀个变量对象的属性被创建
   - `如果变量对象已经存在相同名称的属性，则完全替换这个属性`
3. 变量声明
   - 由名称和对应值（undefined）组成⼀个变量对象的属性被创建
   - `如果变量名称跟已经声明的形式参数或函数相同，则变量声明不会⼲扰已经存在的这类属性`

> 举个例⼦：

```javascript

function foo(a) {
  var b = 2;
  function c() {}
  var d = function () {};
  b = 3;
}
foo(1);


// 在进⼊执⾏上下⽂后，这时候的 AO 是：
AO = {
  arguments: {
    0: 1,
    length: 1,
  },
  a: 1,
  b: undefined,
  c: reference to function c(){},
  d: undefined,
};

// 当代码执⾏完后，这时候的 AO 是：
AO = {
  arguments: {
    0: 1,
    length: 1,
  },
  a: 1,
  b: 3,
  c: reference to function c(){},
  d: reference to FunctionExpression "d"
};


```

```javascript
function foo() {
  console.log(a);
  a = 1;
}
foo(); // Uncaught ReferenceError: a is not defined
function bar() {
  a = 1;
  console.log(a);
}
bar(); // 1

// 这是因为函数中的"a"并没有通过var关键字声明，所有不会被存放在 AO中。
// 当第⼆段执⾏console的时候，全局对象已经被赋予了a属性，这时候就可以从全局找到 a 的值1
```

```javascript
console.log(foo);
function foo() {
  console.log("foo");
}
var foo = 1;

// 会打印函数，⽽不是 undefined
// 这是因为在进⼊执⾏上下⽂时，⾸先会处理函数声明，其次会处理变量声明，如果变量名称跟已经声明的形式参数或函数相同，则变量声明不会⼲扰已经存在的这类属性。
```

## 上下文 之 作⽤域链

- 当查找变量的时候，会先从当前上下⽂的变量对象中查找，如果没有找到，就会从⽗级(词法层⾯上的⽗级)执⾏上下⽂的变量对象中查找，⼀直找到全局上下⽂的变量对象，也就是全局对象。这样由多个执⾏上下⽂的变量对象构成的链表就叫做作⽤域链
- 函数的作⽤域在函数定义的时候就决定了

```javascript
// 举个例⼦：
function foo() {
  function bar() {
    // ...
  }
}

// 函数创建时，各⾃的[[scope]]为：
foo.[[scope]] = [
  globalContext.VO
];

bar.[[scope]] = [
  fooContext.AO,
  globalContext.VO
];
```

## 上下文 之 this

```text

Types are further subclassified into ECMAScript language types and specification types.

An ECMAScript language type corresponds to values that are directly manipulated by an ECMAScript programmer using the ECMAScript language. The ECMAScript language types are Undefined, Null, Boolean, String, Number, and Object.

A specification type corresponds to meta-values that are used within algorithms to describe the semantics of ECMAScript language constructs and ECMAScript language types. The specification types are Reference, List, Completion, Property Descriptor, Property Identifier, Lexical Environment, and Environment Record.

我们简单的翻译一下：

ECMAScript 的类型分为语言类型和规范类型。

ECMAScript 语言类型是开发者直接使用 ECMAScript 可以操作的。其实就是我们常说的Undefined, Null, Boolean, String, Number, 和 Object。

而规范类型相当于 meta-values，是用来用算法描述 ECMAScript 语言结构和 ECMAScript 语言类型的。规范类型包括：Reference, List, Completion, Property Descriptor, Property Identifier, Lexical Environment, 和 Environment Record。

没懂？没关系，我们只要知道在 ECMAScript 规范中还有一种只存在于规范中的类型，它们的作用是用来描述语言底层行为逻辑。

```

> Reference

- The Reference type is used to explain the behaviour of such operators as delete, typeof, and the assignment operators
- 这里的 Reference 是一个 Specification Type，也就是 “只存在于规范里的抽象类型”。它们是为了更好地描述语言的底层行为逻辑才存在的，但并不存在于实际的 js 代码中

> Reference 的构成，由三个组成部分，分别是：

1. base value
2. referenced name
3. strict reference

- 简单的理解的话：

1. base value 就是属性所在的对象或者就是 EnvironmentRecord，它的值只可能是 undefined, an Object, a Boolean, a String, a Number, or an environment record 其中的一种
2. referenced name 就是属性的名称。
3. strict 标识是不是严格模式

> 如何确定 this 的值

1. 计算 MemberExpression 的结果赋值给 ref
   1. `简单理解 MemberExpression 其实就是()左边的部分。`
2. 判断 ref 是不是一个 Reference 类型。
   1. 如果 ref 是 Reference，并且 IsPropertyReference(ref) 是 true, 那么 this 的值为 GetBase(ref)
   2. 如果 ref 是 Reference，并且 base value 值是 Environment Record, 那么 this 的值为 ImplicitThisValue(ref)
   3. 如果 ref 不是 Reference，那么 this 的值为 undefined

```javascript
var value = 1;

var foo = {
  value: 2,
  bar: function () {
    return this.value;
  },
};

//示例1
console.log(foo.bar());
//示例2
console.log(foo.bar());
//示例3
console.log((foo.bar = foo.bar)());
//示例4
console.log((false || foo.bar)());
//示例5
console.log((foo.bar, foo.bar)());
```

> foo.bar()

```javascript
// 该表达式返回了⼀个 Reference 类型;该值为
var Reference = {
  base: foo,
  name: "bar",
  strict: false,
};

// 该值是 Reference 类型，那么 IsPropertyReference(ref) 的结果是多少呢？

// 前面我们已经铺垫了 IsPropertyReference 方法，如果 base value 是一个对象，结果返回 true。

// base value 为 foo，是一个对象，所以 IsPropertyReference(ref) 结果为 true。

// 这个时候我们就可以确定 this 的值了：

// this = GetBase(ref)，
// GetBase 也已经铺垫了，获得 base value 值，这个例子中就是foo，所以 this 的值就是 foo ，示例1的结果就是 2！
```

> (foo.bar)()

- 实际上 () 并没有对 MemberExpression 进行计算，所以其实跟示例 1 的结果是一样的

> (foo.bar = foo.bar)()

- 有赋值操作符, (foo.bar = foo.bar) 返回的值不是 Reference 类型
- `this 为 undefined，非严格模式下，this 的值为 undefined 的时候，其值会被隐式转换为全局对象。`

> (false || foo.bar)()

- (false || foo.bar) 返回的不是 Reference 类型，this 为 undefined

> (foo.bar, foo.bar)()

- 逗号操作符,(foo.bar, foo.bar)返回的不是 Reference 类型，this 为 undefined

```javascript
var value = 1;

var foo = {
  value: 2,
  bar: function () {
    return this.value;
  },
};

//示例1
console.log(foo.bar()); // 2
//示例2
console.log(foo.bar()); // 2
//示例3
console.log((foo.bar = foo.bar)()); // 1
//示例4
console.log((false || foo.bar)()); // 1
//示例5
console.log((foo.bar, foo.bar)()); // 1
```
