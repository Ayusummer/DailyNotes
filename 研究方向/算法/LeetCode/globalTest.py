# 从起点到矿山的开销
def cost_to_min(sector: list, consume: list, weather: list) -> list:
    """
    :param sector: 区域邻接表
    :param consume: 消耗表
    :param weather: 天气状况表

    且由于开局折返只会徒增消耗, 因此不考虑折返情况, 
    就是一个从起点到矿山的消耗问题
    """



sector = [  [2, 25],   # 1 与 2, 25 邻接
            [1, 3],         # 2
            [2, 4, 25],     # 3
            [3, 5, 24, 25], # 4
            [4, 6, 24],     # 5
            [5, 7, 23, 24],
            []

    ]

