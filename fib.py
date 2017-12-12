def fibIter(n):
    i = 1
    j = 1
    sum = 1
    while (n > 2):
        sum = i + j
        i = j
        j = sum
        n = n -1
    return sum

print fibIter(1)
print fibIter(2)
print fibIter(9)


def fibTail(n):
    pass
