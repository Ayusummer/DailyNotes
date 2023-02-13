# Rocketry

> [Miksus/rocketry: Modern scheduling library for Python (github.com)](https://github.com/Miksus/rocketry)
>
> [Why Rocketry? — Rocketry](https://rocketry.readthedocs.io/en/stable/)

---

Rocketry is a modern statement-based scheduling framework for Python. It is simple, clean and extensive. It is suitable for small and big projects.


- [Rocketry](#rocketry)
  - [Quick Start](#quick-start)
  - [条件表达式](#条件表达式)
    - [API](#api)
      - [Cron](#cron)


---

## Quick Start

```bash
pip install rocketry
```

```python
from rocketry import Rocketry
from rocketry.conds import secondly

app = Rocketry()

@app.task(secondly)
def do_daily():
    print('Doing daily task')

if __name__ == '__main__':
    app.run()

```

> ![Code_cPuY6UcJ2K](http://cdn.ayusummer233.top/DailyNotes/202301111538008.gif)

除了这种基本的用法, 还可以给任务的执行加上其他自定义条件, 比如:

```python
from rocketry import Rocketry
from rocketry.conds import daily, time_of_week
from pathlib import Path

app = Rocketry()

@app.cond()
def file_exists(file):
    return Path(file).exists()

@app.task(daily.after("08:00") & file_exists("start.py"))
def do_work():
    print('Doing work')

app.run()
```

> ![Code_YQPZjeVSn7](http://cdn.ayusummer233.top/DailyNotes/202301111606620.gif)

---

官网提供的更多示例:

```python
from rocketry.conds import daily, after_success
from rocketry.args import Return

@app.task(daily.after("07:00"))
def do_first():
    ...
    return 'Hello World'

@app.task(after_success(do_first))
def do_second(arg=Return('do_first')):
    # arg contains the value of the task do_first's return
    ...
    return 'Hello Python'
```

```python
from rocketry.conds import daily

@app.task(daily, execution="main")
def do_unparallel():
    ...

@app.task(daily, execution="async")
async def do_async():
    ...

@app.task(daily, execution="thread")
def do_on_separate_thread():
    ...

@app.task(daily, execution="process")
def do_on_separate_process():
    ...
```

```python
@app.task('every 10 seconds')
def do_constantly():
    ...

@app.task('every 1 minute')
def do_minutely():
    ...

@app.task('every 1 hour')
def do_hourly():
    ...

@app.task('every 1 day')
def do_daily():
    ...

@app.task('every 2 days 2 hours 20 seconds')
def do_custom():
    ...
```

```python
@app.task('minutely')
def do_minutely():
    ...

@app.task('hourly')
def do_hourly():
    ...

@app.task('daily')
def do_daily():
    ...

@app.task('weekly')
def do_weekly():
    ...

@app.task('monthly')
def do_monthly():
    ...
```

```python
@app.task("minutely before 45")
def do_minutely():
    ...

@app.task("hourly after 45:00")
def do_hourly():
    ...

@app.task("daily between 08:00 and 14:00")
def do_daily():
    ...

@app.task("weekly on Monday")
def do_weekly():
    ...

@app.task("monthly starting 3rd")
def do_monthly():
    ...
```

```python
@app.task('time of day between 10:00 and 18:00')
def do_constantly_during_day():
    ...

@app.task('time of week between Saturday and Sunday')
def do_constantly_during_weekend():
    ...
```

```python
app = Rocketry(execution="async")

@app.task("daily")
def do_main():
    ...
```

> PS: 因为描述都比较明确, 能看出大致用法, 所以贴上来了, 等到后面再结合具体使用场景进行记录


----
## 条件表达式

### API

#### Cron

> [Cron Scheduling — Rocketry](https://rocketry.readthedocs.io/en/stable/handbooks/conditions/api/cron.html#id1)

```python
from rocketry.conds import cron

@app.task(cron('* * * * *'))
def do_minutely():
    ...

@app.task(cron('*/2 12-18 * Oct Fri'))
def do_complex():
    "Run at every 2nd minute past every hour from 12 through 18 on Friday in October."
    ...
```