# 打分模拟


def final_score(list_score):
    list_score.sort()
    del list_score[len(list_score)-1]
    del list_score[0]
    return (sum(list_score))/len(list_score)


lst_score = [9, 8, 10, 6, 7, 9, 8, 5, 9, 7]
print(final_score(lst_score))
