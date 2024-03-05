<!--
 * @Author: your name
 * @Date: 2021-05-25 22:19:51
 * @LastEditTime: 2021-05-26 14:20:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \DailyNotes\OpenCV-python.md
-->
# OpenCV-python

---



---
## `cv2.CascadeClassifier`
- [参考链接](https://blog.csdn.net/Stray_Lambs/article/details/101123252)

    ----
- `CascadeClassifier`，是 Opencv 中做人脸检测的时候的一个级联分类器。并且既可以使用 Haar，也可以使用 LBP 特征。

    ---
### `Haar`
- Haar 特征是一种反映图像的灰度变化的，像素分模块求差值的一种特征。
- 它分为三类：`边缘特征`、`线性特征`、`中心特征和对角线特征`。
- 用黑白两种矩形框组合成特征模板，在特征模板内用 黑色矩形像素和 减去 白色矩形像素和来表示这个模版的特征值。
  - 例如：脸部的一些特征能由矩形模块差值特征简单的描述，如：眼睛要比脸颊颜色要深，鼻梁两侧比鼻梁颜色要深，嘴巴比周围颜色要深等。
  - 但矩形特征只对一些简单的图形结构，如边缘、线段较敏感，所以只能描述在特定方向(水平、垂直、对角) 上有明显像素模块梯度变化的图像结构。这样就可以进行区分人脸。
  

  ----
### `LBP`
- [LBP特征原理@SnailTyan](https://blog.csdn.net/quincuntial/article/details/50541815)   
  [`写完才发现全摘录了,建议直接阅读原文,原文评论区有不少相关讨论`]

    ----
#### `LBP` 特征的背景介绍
- LBP 指局部二值模式，英文全称：Local Binary Pattern，是一种用来描述图像局部特征的算子;
- LBP 特征具有灰度不变性和旋转不变性等显著优点。由 T.Ojala, M.Pietikäinen, 和 D.Harwood 在1994年提出;
- 由于 LBP 特征计算简单、效果较好，因此 LBP 特征在计算机视觉的许多领域都得到了广泛的应用，LBP 特征比较出名的应用是用在人脸识别和目标检测中，在计算机视觉开源库 Opencv 中有使用 LBP 特征进行人脸识别的接口，也有用 LBP 特征训练目标检测分类器的方法，Opencv 实现了 LBP 特征的计算，但没有提供一个单独的计算 LBP 特征的接口。


    ----
#### LBP特征的原理

1.原始LBP特征描述及计算方法

- 原始的 LBP 算子定义在像素 $3*3$ 的邻域内，以邻域中心像素为阈值，相邻的 8 个像素的灰度值与邻域中心的像素值进行比较，若周围像素大于中心像素值，则该像素点的位置被标记为 1 ，否则为 0 。这样，$3*3$ 邻域内的 8 个点经过比较可产生 8 位二进制数，将这 8 位二进制数依次排列形成一个二进制数字，这个二进制数字就是中心像素的 LBP 值，LBP 值共有 $2^8 = 256$ 种可能。中心像素的 LBP 值反映了该像素周围区域的纹理信息。
> PS : 计算 LBP 特征的图像必须是灰度图，如果是彩色图，需要先转换成灰度图。
- 上述过程用图像表示为：  
  ![20210526101757](http://cdn.ayusummer233.top/img/20210526101757.png)     
  ![20210526101852](http://cdn.ayusummer233.top/img/20210526101852.png)   
- 将上述过程用公式表示为：        
  ![20210526101929](http://cdn.ayusummer233.top/img/20210526101929.png)    
  $(x_c, y_c)$ 为中心像素的坐标     
  p 为邻域的第 p 个像素    
  ip  为邻域像素的灰度值    
  ic 为中心像素的灰度值     
  s(x) 为符号函数

- 原始LBP特征计算代码(Opencv下)
    ```C++
    //原始LBP特征计算
    template <typename _tp>
    void getOriginLBPFeature(InputArray _src,OutputArray _dst)
    {
        Mat src = _src.getMat();
        _dst.create(src.rows-2,src.cols-2,CV_8UC1);
        Mat dst = _dst.getMat();
        dst.setTo(0);
        for(int i=1;i<src.rows-1;i++)
        {
            for(int j=1;j<src.cols-1;j++)
            {
                _tp center = src.at<_tp>(i,j);
                unsigned char lbpCode = 0;
                lbpCode |= (src.at<_tp>(i-1,j-1) > center) << 7;
                lbpCode |= (src.at<_tp>(i-1,j  ) > center) << 6;
                lbpCode |= (src.at<_tp>(i-1,j+1) > center) << 5;
                lbpCode |= (src.at<_tp>(i  ,j+1) > center) << 4;
                lbpCode |= (src.at<_tp>(i+1,j+1) > center) << 3;
                lbpCode |= (src.at<_tp>(i+1,j  ) > center) << 2;
                lbpCode |= (src.at<_tp>(i+1,j-1) > center) << 1;
                lbpCode |= (src.at<_tp>(i  ,j-1) > center) << 0;
                dst.at<uchar>(i-1,j-1) = lbpCode;
            }
        }
    }
    ```    
  测试结果：     
  ![20210526102435](http://cdn.ayusummer233.top/img/20210526102435.png)
  > 原博主测测试结果, 我个人用的 OpenCV-python 没做测试

    ----
2.LBP 特征的改进版本
- 在原始的 LBP 特征提出以后，研究人员对 LBP 特征进行了很多的改进，因此产生了许多 LBP 的改进版本。

> save, 留个眼[bookmark]在这里, 先写其他的了



----
### `detectMultiScale()`
```C++
void detectMultiScale(
    // 待检测图像
    const Mat& image, 
    // 被检测物体的矩形框向量          
    CV_OUT vector & objects,  
    // 前后两次相继的扫描中搜索窗口的比例系数，默认为 1.1 即每次搜索窗口扩大 10%  
    double scaleFactor = 1.1, 
    /*构成检测目标的相邻矩形的最小个数 
      如果组成检测目标的小矩形的个数和
          小于 minneighbors - 1 都会被排除
      如果 minneighbors为 0 
          则函数不做任何操作就返回所有被检候选矩形框  
    */
    int minNeighbors = 3, 
    // 若设置为 CV_HAAR_DO_CANNY_PRUNING 函数将会使用 Canny 边缘检测来排除边缘过多或过少的区域      
    int flags = 0,        
    // 最后两个参数用来限制得到的目标区域的范围      
    Size minSize = Size(),
    Size maxSize = Size() 
    );
```
- `falgs`
  - `CV_HAAR_DO_CANNY_PRUNING` : 利用Canny边缘检测器来排除一些边缘很少或者很多的图像区域
  - `CV_HAAR_SCALE_IMAGE` : 按比例正常检测
  - `CV_HAAR_FIND_BIGGEST_OBJECT` : 只检测最大的物体
  - `CV_HAAR_DO_ROUGH_SEARCH` : 只做初略检测


----
## 直方图处理
- 对一幅低对比度分辨率的图像采用直方图均衡化和规定化方法实现图像增强，分别采用系统函数和自己编写函数实现相应用功能。

    ---
- [参考链接@CodecWang](http://codec.wang/#/opencv/basic/15-histograms)

    ---
- `直方图` : 简单来说，直方图就是图像中每个像素值的个数统计形成的柱状图
- `OpenCV中直方图计算`
  ```python
  cv2.calcHist(images, channels, mask, histSize, ranges)
  ```
  - `images` : 要计算的原图，以方括号的传入，如：[img]
  - `channels` : 类似dims，灰度图写[0]就行，彩色图B/G/R分别传入[0]/[1]/[2]
    - `dims` : 要计算的通道数，对于灰度图dims=1，普通彩色图dims=3
  - `mask` : 要计算的区域，计算整幅图的话，写None
  - `histSize` : 子区段数目，如果我们统计0~255每个像素值histSize=256；如果划分区间，比如0~15, 16~31…240~255这样16个区间，histSize=16
  - `ranges` : 要计算的像素值范围，一般为[0,256)

    ---
- `绘制直方图`
  ```python
    import cv2
    import matplotlib.pyplot as plt

    img = cv2.imread('../resource/pic/lena_low_quality.jpg')
    plt.hist(img.ravel(), 256, [0, 256])
    plt.show()
  ```
  ![20210410155316](http://cdn.ayusummer233.top/img/20210410155316.png)
  - 可以看出,这个图像确实有够糊的

    ---
- 直方图均衡化
  - 一副效果好的图像通常在直方图上的分布比较均匀，直方图均衡化就是用来改善图像的全局亮度和对比度。
    ```python
    import cv2
    import numpy as np
    import matplotlib.pyplot as plt

    img = cv2.imread('../resource/pic/lena_low_quality.jpg', 0)

    # 1.直方图计算
    # 使用OpenCV函数计算
    hist = cv2.calcHist([img], [0], None, [256], [0, 256])  # 性能：0.022158 s

    # 2.绘制直方图
    plt.hist(img.ravel(), 256, [0, 256])
    plt.show()

    # 3.直方图均衡化
    equ = cv2.equalizeHist(img)
    cv2.imshow('equalization', np.hstack((img, equ)))  # 并排显示
    cv2.waitKey(0)

    # 绘制出均衡化后的直方图
    plt.hist(equ.ravel(), 256, [0, 256])
    plt.show()

    ```
    ![20210410162024](http://cdn.ayusummer233.top/img/20210410162024.png)

    ---
- 自己编写函数实现相应用功能
    ```python
    import cv2
    import numpy as np
    import matplotlib.pyplot as plt


    # 直方图均衡化
    def hist_equal(image, z_max=255):
        H, W = image.shape
        S = H * W * 1.
        out = image.copy()
        sum_h = 0.

        for i in range(1, 255):
            ind = np.where(image == i)

            sum_h += len(image[ind])

            z_prime = z_max / S * sum_h

            out[ind] = z_prime

            out = out.astype(np.uint8)

        return out


    img = cv2.imread("../resource/pic/lena_low_quality.jpg", 0).astype(np.float)
    out = hist_equal(img)
    # 显示直方图
    plt.hist(out.ravel(), bins=255, rwidth=0.8, range=(0, 255))
    plt.show()
    # 显示处理后的图像
    cv2.imshow("result", out)
    cv2.waitKey(0)
    cv2.destroyAllWindows()
    ```
    ![20210410163952](http://cdn.ayusummer233.top/img/20210410163952.png)
