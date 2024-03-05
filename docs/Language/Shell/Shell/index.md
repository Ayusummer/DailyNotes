# Shell

- [Shell](#shell)
  - [显示时间](#显示时间)

---

- **Shell** 是一个命令行界面，用户可以通过它与操作系统进行交互。Shell 既是一个命令解释器，也是一种脚本语言。在类 Unix 系统(如 Linux、macOS) 中，Shell 是用户与操作系统核心进行交互的主要方式。

  - **sh(Bourne Shell) **：

    **sh** 是最早的 Unix shell，由 Stephen Bourne 在贝尔实验室开发。作为最初的 Unix shell，它为后来的许多 shell，包括 bash 和 zsh，奠定了基础。

  - **bash(Bourne Again Shell) **：

    **bash** 是 sh 的一个改进版本，由 GNU 项目开发。它是 Bourne Shell 的自由软件替代品，加入了更多的功能和用户友好的特性。bash 遵循 POSIX 标准，与原始的 Bourne Shell 兼容，同时加入了一些额外的特性(如命令历史和命令行编辑) 。

  - **zsh(Z Shell) **：

    **zsh** 是另一个流行的 Unix shell，它兼容 bash，但引入了许多新功能和改进，如更好的脚本语言功能和用户界面改进。zsh 的一些特性特别注重交互性和易用性，比如更强大的自动补全和主题支持

- `.sh` 文件扩展名通常用于指代 shell 脚本，而不特指用 Bourne Shell (`sh`) 编写的脚本。

---

## 显示时间

:::tabs

@tab:active bash

```bash
PS1="[\d  \t] \u@\h: "
# 要永久生效请编辑如下文件
~/.bashrc

# 如果要保留 python 的虚拟环境提示符，可以这样写
PS1="\$(if [ -n \"\${VIRTUAL_ENV}\" ]; then echo \"(\${VIRTUAL_ENV##*/})\"; fi) [\d  \t] \u@\h: "
```
- `\d`: 显示当前日期(格式为 `Weekday Month Date`，如 `Mon Dec 11`) 
- `\t`: 显示当前时间(24小时制，包括小时、分钟和秒) 
- `\u@\h`: 显示当前用户名和主机名
- 

![image-20231211105830736](http://cdn.ayusummer233.top/DailyNotes/202312111059839.png)

@tab zsh

```bash
PROMPT='[%*] %n@%m: %~%# '
# 要显示日期:
PROMPT='[%D{%Y-%m-%d} %*] %n@%m: %~%# '
# 要永久生效请编辑如下文件
~/.zshrc

# 如果要保留 python 的虚拟环境提示符，可以这样写
PROMPT='$(if [ -n "${VIRTUAL_ENV}" ]; then echo "(${VIRTUAL_ENV##*/})"; fi) [%D{%Y-%m-%d} %*] %n@%m: %~%# '
```
- `%*`: 显示当前时间(24小时制，包括小时、分钟和秒) 
- `%n@%m: %~%#`: 显示当前用户名、主机名、当前目录和提示符

```bash
# 或者使用如下这种写法以支持显示python虚拟环境
set_prompt() {
    # 保存原始的 PS1，以便在虚拟环境中使用
    export ORIG_PS1="$PS1"

    # 设置自定义提示符
    export PROMPT="[%D{%Y-%m-%d} %*] %n@%m: %~ %# "

    # 如果 Python 虚拟环境被激活，则添加它的提示符
    if [[ -n "$VIRTUAL_ENV" ]]; then
        export PROMPT="(`basename \"$VIRTUAL_ENV\"`) $PROMPT"
    fi
}

# 在每个命令之前执行 set_prompt 函数
autoload -Uz add-zsh-hook
add-zsh-hook precmd set_prompt
```

![image-20231211110828980](http://cdn.ayusummer233.top/DailyNotes/202312111108063.png)

:::

---

