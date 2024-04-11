# LaTeX Reference

## Introduction

LaTeX is a high-level, descriptive markup language that accesses the power of TeX for document preparation.

The Extension of LaTeX File is **.tex** .

### Contents

1. [Structure of LaTeX](#structure-of-latex)

2. [Comments](#comments)

3. [Lists](#lists)

   - [Ordered List](#ordered-list)
  
   - [Unordered List](#unordered-list)

4. [Font and Style Manipulation](#font-and-style-manipulation)

5. [Color](#color)

6. [Table](#table)

7. [Image](#image)

8. [Math Expressions](#math-expressions)

   - [Mathematical Modes](#mathematical-modes)

   - [Mathematical Symbols](#mathematical-symbols)

   - [Mathematical Equations](#mathematical-equations)

9. [Reference](#reference)

---

## Structure of Latex

The Structure is as Follows:

```tex
\documentclass{article} % Used to Define the Page Size and Style
\usepackage{graphicx} % Required for inserting images

\title{LaTeX}
\author{Soorya U}
\date{May 2023}

\begin{document}

    \maketitle

    \section{First document}

    \par This is a simple example. \\

    \par This is Done using \LaTeX{} \\
\end{document}
```

`\documentclass{article}` declares the document type known as its class, which controls the overall appearance of the document.

The content is written between the `\begin{document}` and `\end{document}` tags.

`\par` is used for New Paragraph

`\\` is used for New Line

---

## Comments

**%** is used to Add Comments in LaTeX File.

```tex
% This is a Comment
```

---

## Lists

### Ordered List

Ordered Lists are the Lists whose items are Numbered.

The Ordered List can be created by _enumerate_ Environment and each items are represented by `\item` command.

The Syntax and Outputs are as Follows:

```tex
\begin{enumerate}
    \item \TeX{}
    \item \LaTeX{}
\end{enumerate}
```

## Unordered List

Unordered Lists are the Lists whose items are not numbered.

The Unordered List can be created by _itemize_ Environment and each items are represented by `\item` command.

The Syntax and Outputs are as Follows:

```tex
\begin{itemize}
    \item \TeX{}
    \item \LaTeX{}
\end{itemize}
```

---

## Font and Style Manipulation

There are Several Commands for Font and Style Manipulation.

Some of them and their outputs are as follows:

```tex
\begin{enumerate}

    % Font Size Manipulation

    \Huge{ \LaTeX{} }
    \huge{ \LaTeX{} }
    \LARGE{ \LaTeX{} }
    \Large{ \LaTeX{} }
    \large{ \LaTeX{} }
    \normalsize{ \LaTeX{} }
    \small{ \LaTeX{} }
    \tiny{ \LaTeX{} }

    % Font Style Manipulation

    \emph{ \LaTeX{} } - Italic
    \textbf{ \LaTeX{} } - Bold

\end{enumerate}
```

---

## Color

_xolor_ is the Package used to Add Colors.

```tex
\usepackage{xcolor}
```

`\textcolor{}{}` can be used to Add Color to Text.

```tex
\textcolor{violet}{Hello Violet World}
\textcolor{blue}{Hello Blue World}
\textcolor{green}{Hello Green World}
\textcolor{yellow}{Hello Yellow World}
\textcolor{orange}{Hello Orange World}
\textcolor{red}{Hello Red World}
```

---

## Table

The tables in Latex are created with a combination of a _table_ and _tabular_ environment.

**&** is used to Seperate the Cell in Rows.

```tex
\begin{table} % Table with Caption

    \begin{tabular}{|c|c|c|} % Structure of Table

        \hline % Provides Horizontal Line

        Cell(1,1) & Cell(1,2) & Cell(1,3) \\

        \hline

        Cell(2,1) & Cell(2,2) & Cell(2,3) \\

        \hline

        Cell(3,1) & Cell(3,2) & Cell(3,3) \\

        \hline

    \end{tabular}

    \caption{Caption} % Caption of Table

\end{table}
```

---

## Image

The Figures and Graphs in Latex are created using the _figure_ environment.

All the pictures inserted in the figure and the graphicx environment will be indexed automatically and tagged with the successive numbers.

You need to include the `\includegraphics{}` command to insert an image.

The Image can referred using `\ref{}` command.

```tex
\begin{figure}
    \includegraphics[scale]{Path of Image}
    \caption{Caption}
    \label{fig:label}
\end{figure}

The Above Figure \ref{fig:label} is Inserted.
```

---

## Math Expressions

### Mathematical Modes

LaTeX allows two writing modes for mathematical expressions:

1. **Inline Math Mode**

   Inline Math Mode is used to write formulas that are part of a paragraph.

   The equation can be inserted between the **$** signs to typeset the math in inline mode

   _Example:_

   ```tex
   $x^2 + y^2 = z^2$
   ```

2. **Display Math Mode**

   Display Math Mode is used to write expressions that are not part of a paragraph, and are therefore put on separate lines.

   _equation_ Environment can be used to typeset maths
   in display mode.

   _Example:_

   ```tex
   \begin{equation}
      E=mc^2
   \end{equation}
   ```

The mathematics mode in LaTeX is very flexible and powerful, there is much more that can be done with it:

- Subscripts and Superscripts
- Brackets and Parenthesis
- Fractions and Binomials
- Aligning Equations
- Operators
- Spacing in Math Mode
- Integrals, Sums and Limits
- Display style in Math Mode
- List of Greek Letters
- Mathematical Font and Symbols

### Mathematical Symbols

The math or mathematical symbol are those symbols, which are used as an intermediate to perform the mathematical functions.

The variables and functions in mathematics are used for various purposes.

Some Greek are:

1. Greek Sumbols

   | Commands      | Symbols |
   | --------------| ------- |
   | \alpha        | α       |
   | \beta         | β       |
   | \gamma        | γ       |
   | \delta        | δ       |
   | \epsilon      | ϵ       |
   | \theta        | θ       |
   | \pi           | π       |
   | \lambda       | λ       |
   | \eta          | η       |
   | \zeta         | ζ       |

2. Math Symbols

   | Commands      | Symbols |
   | ------------- | ------- |
   | \sqrt{}       | √       |
   | \sum {} ∧ {}  | Σ       |
   | \prod {} ∧ {} | π       |
   | \int {} ∧ {}  | ∫       |
   | \oint {} ∧ {} | ∮       |
   | \partial      | ∂       |
   | \pm           | ±       |
   | \mp           | ∓       |
   | \inf ty       | ∞       |
   | \lim {}       | lim     |

### Mathematical Equations

In LaTeX, Equations can be easily written using the commands.

Commands can be quickly inserted to write the equations between or anywhere in your document with the use of simple text.

There is no need to search for the equations or symbols on the menu bar as compared to the others.

_Example:_

```tex
\begin{equation}
   f(x)  = a x^2+b x +c
\end{equation}

\begin{equation}
   E'=\nabla \times B - 4\pi j
\end{equation}

\begin{equation}
   L' = {L}{\sqrt{1-\frac{v^2}{c^2}}}
\end{equation}

\begin{equation}
   R(t)= A \left(\frac{E_0}{\rho_0}\right)^{1/5}t^{2/5}
\end{equation}

\begin{equation}
   S(\omega) = \frac{\alpha g^2}{\omega^5} e^{[ -0.74\bigl\{\frac{\omega U_\omega 19.5}{g}\bigr\}^{\!-4}\,]}
\end{equation}

\begin{equation}
   \lim_{x\to 0}{\frac{e^x-1}{2x}}\frac{\frac{0}{0}}{\mathrm{H}}{=}\lim_{x\to 0}{\frac{e^x}{2}}={\frac{1}{2}}
\end{equation}

\begin{equation}
   f(x) = \left\{
      \begin{array}{lr}
         x^2 & : x < 0\\
         x^3 & : x \ge 0
      \end{array}
   }\right.
\end{equation}
```

---

## Reference

1. [_Overleaf Documentation_](https://www.overleaf.com/learn)

---
