[Markdown语法](http://localhost:3000/)
=========
目录
----
+ [1.块元素](#1-)
  - [1.1标题](#1-1-)
  - [1.2区块引用](#1-2-)
  - [1.3列表](#1-3-)
  - [1.4分割线](#1-4-)
+ [2.段元素](#2-)
  - [2.1链接](#2-1-)
  - [2.2强调](#2-2-)
  - [2.3代码](#2-3-)
  - [2.4图片](#2-4-)
  - [2.5表格](#2-5-)

***
# 1.[块元素](#-)
## 1.1[标题](#-)
> 使用`#`标识标题级别 1~6个等级

# # h1
h1
=========
## ## h2
h2
------------
### ### h3
#### #### h4
##### ##### h5
###### ###### h6


## 1.2[区块引用](#-)
> 使用`>` 这就是区块
>> 子区块
>>> 子子区块

> ### 嵌套其他语法如`###`


## 1.3[列表](#-)
> 无序列表
> ```
> * Red
> * Green
> * Blue
> 等同于
> + Red
> + Green
> + Blue
> 等同于
> - Red
> - Green
> - Blue
> ```

* Red
* Green
* Blue

> 有序列表
> ```
> 1. Red
> 2. Green
> 3. Blue
> ```

1. Red
2. Green
3. Blue


## 1.4[分割线](#-)
> 下面5种方式效果等同
> ```
> * * *
> ***
> *****
> - - -
> -------------
> ```

* * *


# 2.[段元素](#-)
## 2.1[链接](#-)
> ```
> this is [baidu](http://www.baidu.com "baidu")
> or
> [baidu](http://www.baidu.com)
> or
> [google][id]
> [id]:http://www.google.com "optional title here"
> or
> http://www.google.com
> or
> <http://www.google.com>
> ```

[Baidu](http://www.baidu.com "baidu")
[Google][1]
[1]:http://www.google.com (google)
http://www.google.com
<http://www.google.com>


## 2.2[强调](#-)
> 使用`*`或者`_`
> ```
> *sample*
> _sample_
> **sample**
> __sample__
> ~~test~~
> ```

*sample*
_sample_
**sample**
__sample__
~~test~~


## 2.3[代码](#-)
> 使用(`)包裹
> ```
> `code`
> ```

`code`


## 2.4[图片](#-)
> ```
> ![img](/path/to/img.jpg "optinal title")
> or
> ![img][id]
> [id]:url/to/img "optianl title"
> ```

![markdown](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png)


## 2.5[表格](#-)
> ```
> | Left-Aligned  | Center Aligned  | Right Aligned |
> | :------------ |:---------------:| -----:|
> | col 3 is      | some wordy text | $1600 |
> | col 2 is      | centered        |   $12 |
> | zebra stripes | are neat        |    $1 |
> ```

| Left-Aligned  | Center Aligned  | Right Aligned |
| :------------ |:---------------:| -----:|
| col 3 is      | some wordy text | $1600 |
| col 2 is      | centered        |   $12 |
| zebra stripes | are neat        |    $1 |


[Top](#-) [Back](http://localhost:3000/)