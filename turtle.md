<!--
 * @Author: your name
 * @Date: 2021-05-23 13:43:44
 * @LastEditTime: 2021-05-23 13:58:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \DailyNotes\turtle.md
-->
# turtle
- 基本上都是照抄[官方文档](https://docs.python.org/zh-cn/3.9/library/turtle.html#module-turtle)的

---
## 重置
- 观感上讲调用此函数之前的海龟绘图在调用该函数后都消失了(清屏)
- `turtle.reset()`
- `turtle.resetscreen()`
- 重置屏幕上的所有海龟为其初始状态。
> 注解 此 TurtleScreen 方法作为全局函数时只有一个名字 resetscreen。全局函数 reset 所对应的是 Turtle 方法 reset。


----
## 画圆
- 画圆之前要搞清楚海龟的朝向,画圆时圆心在海龟正左方距离为 radius 处
- `turtle.setheading(to_angle)`
- `turtle.seth(to_angle)`
- `to_angle` -- 一个数值 (整型或浮点型)
- 设置海龟的朝向为 to_angle。以下是以角度表示的几个常用方向：
![20210523134615](http:cdn.ayusummer233.top/img/20210523134615.png)

```python
>>> turtle.setheading(90)
>>> turtle.heading()
90.0
```


---



---
## turtle.speed(speed=None)
- `speed` : 一个 [0,10] 范围内的整型数或速度字符串
  - `fastest`: 0 最快
  - `fast`: 10 快
  - `normal`: 6 正常
  - `slow`: 3 慢
  - `slowest`: 1 最慢

- 此外,隐藏海龟可以显著提升绘制速度
    - `turtle.hideturtle()`
    - `turtle.ht()`




---
## turtle.circle(radius, extent=None, steps=None)
- `radius` : 一个数值
- `extent` : 一个数值 (或 None)
- `steps` : 一个整型数 (或 None)
    
    ---
- 绘制一个 radius 指定半径的圆。圆心在海龟左边 radius 个单位；extent 为一个夹角，用来决定绘制圆的一部分。如未指定 extent*则绘制整个圆。如果 *extent 不是完整圆周，则以当前画笔位置为一个端点绘制圆弧。如果 radius 为正值则朝逆时针方向绘制圆弧，否则朝顺时针方向。最终海龟的朝向会依据 extent 的值而改变。
- 圆实际是以其内切正多边形来近似表示的，其边的数量由 steps 指定。如果未指定边数则会自动确定。此方法也可用来绘制正多边形。
> - 要注意的是,画笔起始点位置并非圆心,而是圆心垂线与下圆弧的交点
>   ![](https://cdn.ayusummer233.top/image/c4x4voXmXM.gif)

----
## turtle.colormode(255)
- turtle色彩模式切换为RGB模式
  ```python
  turtle.colormode(255)
  ```
- 后面就可以用`turtle.color(RGB元组)`来给画笔上色了

----
## 绘图完成后不自动退出
- `turtle.exitonclick()`  
  绘图完成后点一下绘图界面则绘图窗口关闭
- 程序**结尾**加上:`turtle.done()` 或 `turtle.mainloop()`
  绘图结束,需手动关闭窗口


----


