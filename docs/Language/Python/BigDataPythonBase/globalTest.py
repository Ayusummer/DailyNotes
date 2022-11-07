import numpy
import matplotlib.pyplot as plt
import multipolyfit as mpf

data = [[1, 1], [4, 3], [8, 3], [11, 4], [10, 7], [15, 11], [16, 12]]
x, y = zip(*data)
plt.plot(x, y, 'kx')
b = (2, 5, 9, 12, 11, 16, 17)
c = (3, 6, 10, 13, 12, 17, 18)

stacked_x = numpy.array([x, b, c])
print(stacked_x)
coeffs = mpf(stacked_x, y, 0)
x2 = numpy.arange(min(x) - 1, max(x) + 1, .01)  # use more points for a smoother plot
y2 = numpy.polyval(coeffs, x2)  # Evaluates the polynomial for each x2 value
plt.plot(x2, y2, label="deg=3")
