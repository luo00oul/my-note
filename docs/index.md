# Welcome to MkDocs

For full documentation visit [mkdocs.org](https://www.mkdocs.org).

## Commands

* `mkdocs new [dir-name]` - Create a new project.
* `mkdocs serve` - Start the live-reloading docs server.
* `mkdocs build` - Build the documentation site.
* `mkdocs -h` - Print help message and exit.

## Project layout

    mkdocs.yml    # The configuration file.
    docs/
        index.md  # The documentation homepage.
        ...       # Other markdown pages, images and other files.
## 数学公式测试

行内公式：$a^2 + b^2 = c^2$

块公式：

$$
\int_0^1 x^2 dx = \frac{1}{3}
$$

## 代码测试（C++）

```cpp
#include <iostream>
using namespace std;

int main() {
    cout << "Hello MkDocs!" << endl;
    return 0;
}
好问题，而且**14 天 + 每天 1～2 小时**这个目标是**完全可行的** 👍
《一份不太简单的 LaTeX 指南》本身就非常适合你这种 **CS + 数学 + 笔记排版** 的需求。

我会给你三样东西：
1️⃣ **总体学习建议（避坑 + 方法论）**
2️⃣ **14 天详细学习计划（每天 1～2h，可执行）**
3️⃣ **“14 天后你应该能做到什么”的验收标准**

整体风格：**稳进阶、不折腾、以写笔记为核心** ✍️📐

------

## 一、先说结论：你该怎么学（很重要）

### ✅ 正确学习姿势（非常关键）

**LaTeX ≠ 编程语言**
👉 它是“**标记语言 + 排版系统**”，所以：

- ❌ 不要死记命令
- ✅ 要**边看边敲、边改边看效果**
- ✅ 以“**我要写一份笔记**”为驱动

### ✅ 强烈建议的工具组合

任选一个即可：

- **Overleaf（推荐新手）**
	- 不用装环境
	- 实时预览
- 或 **本地 TeX Live + VS Code + LaTeX Workshop**
	- 等第 7～8 天再搞

> 前 7 天：**Overleaf**
> 后 7 天：随你，Overleaf 也完全够用

------

## 二、14 天 LaTeX 入门实战计划（每天 1～2h）

> 参考书：《一份不太简单的 LaTeX 指南》
> 核心目标：**能写数学 + 能排版笔记 + 不怕报错**

------

### 📅 Day 1：LaTeX 是什么 & 最小可用文档（超重要）

**目标**：能成功编译一份最简单的文档

📖 看：

- 什么是 LaTeX
- 文档结构（documentclass / preamble / document）

🧠 重点掌握：

```latex
\documentclass{article}
\begin{document}
Hello LaTeX!
\end{document}
```

✍️ 实践：

- 改标题
- 加一段中文（用 `ctexart`）

✅ 今日产出：

- 一份**能编译的中文 LaTeX 文件**

------

### 📅 Day 2：基本文本排版 & 中文环境

**目标**：写“正常人类能看的文字”

📖 看：

- 段落、换行
- 加粗、斜体
- 列表（itemize / enumerate）

🧠 必会：

```latex
\textbf{加粗}
\emph{强调}
\begin{itemize}
  \item 第一条
\end{itemize}
```

✍️ 实践：

- 写一页「线性代数/数据结构」纯文字笔记

------

### 📅 Day 3：数学公式 · 行内 & 行间（核心）

**目标**：会写 80% 常见数学公式

📖 看：

- `$...$`
- `\[...\]`
- 上下标、分数、根号

🧠 必会：

```latex
$a^2 + b^2 = c^2$
\[
\frac{a}{b}, \sqrt{x}, \sum_{i=1}^n
\]
```

✍️ 实践：

- 把你一本数学课本中的 5 个公式敲进去

🔥 **今天非常重要**

------

### 📅 Day 4：常用数学结构（矩阵 / 分段函数）

**目标**：搞定考试 + 笔记中最烦的东西

🧠 必会：

```latex
\begin{matrix}
a & b \\
c & d
\end{matrix}
f(x)=
\begin{cases}
x^2 & x>0 \\
0 & x\le 0
\end{cases}
```

✍️ 实践：

- 写一个“矩阵 + 分段函数 + 推导公式”

------

### 📅 Day 5：定理、证明、公式编号

**目标**：像“正式笔记/讲义”一样排版

📖 看：

- theorem / proof
- equation 编号与引用

🧠 必会：

```latex
\begin{theorem}
...
\end{theorem}
\label{eq:1}
\ref{eq:1}
```

✍️ 实践：

- 写一个“定理 + 证明 + 引用公式”

------

### 📅 Day 6：插图、表格（实用但别深挖）

**目标**：会用，不纠结

🧠 会这些就够了：

```latex
\begin{figure}
\includegraphics{xxx}
\end{figure}
\begin{tabular}{ccc}
a & b & c
\end{tabular}
```

✍️ 实践：

- 插一张图
- 写一个简单表格

------

### 📅 Day 7：**第一次整合：写一份完整笔记**

🔥 **阶段总结日**

✍️ 任务：

- 写一份 **2～3 页的 LaTeX 数学/CS 笔记**
	- 标题
	- 文字
	- 公式
	- 矩阵
	- 定理

🎯 到这里你已经 **超过 70% 新手了**

------

### 📅 Day 8：常用宏 & 自定义命令（效率提升）

**目标**：让 LaTeX “像你自己的工具”

🧠 必会：

```latex
\newcommand{\R}{\mathbb{R}}
```

✍️ 实践：

- 给常用符号做 3～5 个宏

------

### 📅 Day 9：数学符号大全 & 查表能力

**目标**：不会的东西知道去哪查

📖 看：

- 常用符号
- AMS 宏包

✍️ 实践：

- 故意写 5 个“没学过的符号”，然后查出来

------

### 📅 Day 10：错误处理 & 编译思维

**目标**：不怕报错

🧠 重点：

- Missing $
- Environment ended by
- Undefined control sequence

✍️ 实践：

- 故意制造错误
- 看 log 定位

------

### 📅 Day 11：LaTeX 排版习惯（像老手）

**目标**：写得“干净 + 好维护”

- 空行 ≠ 换行
- 源码对齐
- 注释 `%`

✍️ 重构你 Day 7 的文档

------

### 📅 Day 12：模板化你的笔记

**目标**：以后直接复制用

✍️ 做一件事：

- 搞一个：
	- `note.tex`
	- 以后所有笔记从它开始

------

### 📅 Day 13：真实场景模拟

✍️ 模拟任务：

- 用 LaTeX 写一节你正在学的课（如线代/离散）

🎯 完整、真实、不追求炫技

------

### 📅 Day 14：复盘 & 固化成果 🎉

- 回看这 14 天
- 总结：
	- 常用 20 个命令
	- 常用 10 个环境

🔥 **你已经完全能自主写数学笔记了**

------

## 三、14 天后的“合格标准”（你对照自测）

如果你能做到下面这些，说明 **目标达成** ✅：

- ✅ 不看教程写一份数学笔记
- ✅ 熟练写：
	- 分数 / 矩阵 / 求和 / 分段函数
- ✅ 知道**不懂的命令怎么查**
- ✅ 报错不慌，能定位

------

## 四、给你的一个真心建议 ❤️

> **LaTeX 不是一次性学会的，而是“用着用着就会了”**

你是 **CS + 喜欢数学**，而且目标只是 **排版笔记**，
👉 **不需要学成 TeX 大师**，**够用 + 顺手 = 完美**

如果你愿意，下一步我可以帮你：

- 🧩 做一个**专属你的笔记模板**
- 📘 把你某门课的笔记直接“LaTeX 化”
- 🧠 总结一份「**LaTeX 数学公式速查表（考试级）**」

你可以直接说：
👉 **“按这个计划走，先帮我做一个 Day 1 的具体任务”** 😊