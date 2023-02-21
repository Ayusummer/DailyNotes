# sovits-32k

> [innnky/so-vits-svc: 基于vits与softvc的歌声音色转换模型 (github.com)](https://github.com/innnky/so-vits-svc)

最近看了许多 AI 翻唱, 感觉很有意思, 遂开新坑

> [【AI 翻唱】群青（阿米娅）_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1XD4y1K7ju/?spm_id_from=333.788&vd_source=bb4d7b2841dd4d0035c93d44ba5cf11a)
>
> [【AI阿梓】极致的女声表现《なんでもないや》翻唱【soVits 3.0】_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1Ge4y1w7YB/?spm_id_from=333.788&vd_source=bb4d7b2841dd4d0035c93d44ba5cf11a)

---

## 环境搭建

> [soVITS3.0炼丹教程 - 哔哩哔哩 (bilibili.com)](https://www.bilibili.com/read/cv20500632?spm_id_from=333.999.0.0)

sovits 依赖中包含 `numpy==1.19.2`, 支持 `Python 3.6-3.8`, 这里选择了创建了一个 `3.8.16` 的 conda 环境

> [NumPy 1.19.2 Release Notes — NumPy v1.24 Manual](https://numpy.org/doc/stable/release/1.19.2-notes.html)

![image-20230219231110434](http://cdn.ayusummer233.top/DailyNotes/202302192311454.png)



---

### 安装 CUDA

> [深度学习GPU环境CUDA详细安装过程（简单快速有效） - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/358737417)
>
> [CUDA Installation Guide for Microsoft Windows (nvidia.com)](https://docs.nvidia.com/cuda/cuda-installation-guide-microsoft-windows/index.html)
>
> [CUDA安装及环境配置——最新详细版_abbrave的博客-CSDN博客_cuda环境配置](https://blog.csdn.net/chen565884393/article/details/127905428)

需要注意的是 `requirements.txt Line14` `torch==1.10.0+cu113`, 表示应当安装 CUDA11.3, 不要直接装了官网最新的 CUDA 12.0

> ![image-20230220220434191](http://cdn.ayusummer233.top/DailyNotes/202302202204234.png)
>
> [CUDA Toolkit 11.3 Downloads | NVIDIA Developer](https://developer.nvidia.com/cuda-11.3.0-download-archive?target_os=Windows&target_arch=x86_64&target_version=10&target_type=exe_local)   (==这个版本依旧行不通==)
>
> ![image-20230220221124558](http://cdn.ayusummer233.top/DailyNotes/202302210020908.png)
>
> > ==这个也不对== , 虽然依赖里是 `torch==1.10.0+cu113`, 但是到训练那一步时始终卡在
> >
> > ![image-20230221000224512](http://cdn.ayusummer233.top/DailyNotes/202302210015290.png)
> >
> > 参考下 [sovits3.0一键脚本（小狼躺平了，所以是深夜诗人修改版本,已更新32k/48k分支切换）.ipynb - Colaboratory (google.com)](https://colab.research.google.com/drive/1_-gh9i-wCPNlRZw6pYF-9UufetcVrGBX?usp=sharing#scrollTo=0gQcIZ8RsOkn) 
> >
> > ![image-20230221001534807](http://cdn.ayusummer233.top/DailyNotes/202302210015832.png)
> >
> > ![image-20230221001629100](http://cdn.ayusummer233.top/DailyNotes/202302210016121.png)
>
> 
>
> [CUDA Toolkit 11.6 Update 2 Downloads | NVIDIA Developer](https://developer.nvidia.com/cuda-11-6-2-download-archive?target_os=Windows&target_arch=x86_64&target_version=11&target_type=exe_local)
>
> ![image-20230221002108190](http://cdn.ayusummer233.top/DailyNotes/202302210021229.png)

安装完成后测试是否安装成功:

![image-20230221002952538](http://cdn.ayusummer233.top/DailyNotes/202302210029555.png)

[下载 CUDNN](https://link.zhihu.com/?target=https%3A//developer.nvidia.com/zh-cn/cudnn) 解压并将 `bin`、`include`、`lib`文件直接复制到`CUDA的安装目录`下

> [cuDNN Archive | NVIDIA Developer](https://developer.nvidia.com/rdp/cudnn-archive)

---

### 安装依赖

```bash
pip install -r requirements.txt -i https://pypi.mirrors.ustc.edu.cn/simple/
```

> 使用清华源的话会在安装  `torch==1.10.0+cu113` 时因找不到对应版本而报错(虽然使用官方源我也没找到)
>
> ![image-20230220214242423](http://cdn.ayusummer233.top/DailyNotes/202302202142442.png)
>
> 按照 [soVITS3.0炼丹Bug Solve - 哔哩哔哩 (bilibili.com)](https://www.bilibili.com/read/cv20997087?spm_id_from=333.999.0.0) 中的方案访问 [PyTorch官网](https://pytorch.org/)  
>
> [Previous PyTorch Versions | PyTorch](https://pytorch.org/get-started/previous-versions/#conda-4)   [Start Locally | PyTorch](https://pytorch.org/get-started/locally/)
>
> ![image-20230221003101869](http://cdn.ayusummer233.top/DailyNotes/202302210031894.png)
>
> ```bash
> conda install pytorch torchvision torchaudio pytorch-cuda=11.6 -c pytorch -c nvidia
> ```
>
> > 虽然 `requirements.txt` 中是 `torch1.10+cu113` 但是实测该 torch 版本在最后训练时即便装了 tensorboard 2.11.2 依旧无法正常运行
>>
> > ---
>>
> > 这一步可能会卡在 `sloving environment` 很长时间, 睡一觉即可解决问题(bush, 总之放一边装依赖就可以了, 可能会花很久
>
> 然后把 `requirements.txt`  `line 14~15` 的
>
> ```txt
> torch==1.10.0+cu113
> torchaudio==0.10.0+cu113
> ```
>
> 删掉然后重新
>
> ```bash
> pip install -r requirements.txt -i https://pypi.mirrors.ustc.edu.cn/simple/
> ```
>
> ![image-20230220230429176](http://cdn.ayusummer233.top/DailyNotes/202302202304197.png)

---

### 拉取 sovits 仓库并下载放置模型文件

> [innnky/so-vits-svc: 基于vits与softvc的歌声音色转换模型 (github.com)](https://github.com/innnky/so-vits-svc)

```bash
# 拉取了默认的 32khz 分支
git clone https://github.com/innnky/so-vits-svc.git
cd so-vits-svc
# hubert
wget -P hubert/ https://github.com/bshall/hubert/releases/download/v0.1/hubert-soft-0d54a1f4.pt
# G与D预训练模型
wget -P logs/32k/ https://huggingface.co/innnky/sovits_pretrained/resolve/main/G_0.pth
wget -P logs/32k/ https://huggingface.co/innnky/sovits_pretrained/resolve/main/D_0.pth
```

---

## 准备素材

最近在推近月少女的礼仪, luna sama 简直是天使(浓度是不是有点高了(), 因此打算用游戏语音炼个丹, 首先遇到的问题就是如何获取到角色的 wav 语音文件

尝试用 AssetStudio 解包官方 Steam 国际中文版的安装目录最终解出了标题页和 Config 的语音, 不过剧情角色语音无法解除来, 使用其他工具亦无果, 最终翻找了找往期汉化组封包的版本找到了若干 pack 文件, 使用 GARbro 成功解出了若干 ogg 

解包后语音文件非常多, 使用人工辨识 + 语音文件中的特殊字符串将每个角色的语音都分开存放, 最终得到了 1151 个露娜的语音文件以及 6916 个朝日的语音文件, 尤希, 凑和瑞穗差不多都是将近 600 个语音文件, 里想奈 300 多, 游星不到 100 以及 1600 多个幼年游星的语音文件(

> 以朝日的一个语音文件为例 `ap_v_asa0001.ogg`, 其中 `asa` 就是指 `asahi`, 还是比较好区分的, 将所有文件按照字典序排列之后即使是手工分类也并没有耗费太多时间

> ogg 与 wav 主要有如下区别
>
> 1. 编码方式不同：WAV使用PCM编码，而OGG使用Ogg Vorbis编码。PCM编码是无损编码，但文件体积大，音质好；Ogg Vorbis是有损编码，可以压缩文件大小，但音质稍差。
> 2. 文件大小：由于编码方式不同，同样长度的音频文件，OGG文件通常比WAV文件小。
> 3. 支持的播放器：WAV是Windows系统上常见的音频格式，通常可以在大多数音频播放器上播放。但OGG格式在某些设备和操作系统上可能需要下载插件才能播放。
> 4. 开源性：WAV是一种开放格式，但是由于它的大文件大小，WAV不适合在互联网上传输，也不适合流媒体传输。而OGG格式是一种自由开放的音频格式，适用于互联网上的音频传输。
>
> 音质上来讲  wav > flac  > ogg > mp3  > wma

由于提取出来的文件均为 ogg 格式, 因此需要转换成 wav 格式, 这里使用了 ffmpeg 来进行处理, 例如:

```bash
ffmpeg -i inputfile.ogg outputfile.wav
```

由于朝日的语音文件比较多, 因此首先尝试用朝日的语音文件试试

```python
# 将 asahi_ogg 目录下的文件使用 ffmpeg 转换成 wav 格式并保存到 asahi 目录下
import os
import subprocess

# 输入和输出目录
input_dir = "asahi_ogg"
output_dir = "asahi"

# 确保输出目录存在
os.makedirs(output_dir, exist_ok=True)

# 调用ffmpeg进行文件格式转换
for filename in os.listdir(input_dir):
    if filename.endswith(".ogg"):
        input_path = os.path.join(input_dir, filename)
        output_path = os.path.join(output_dir, f"{os.path.splitext(filename)[0]}.wav")
        subprocess.run(["ffmpeg", "-i", input_path, output_path])

```

> ![image-20230220212852776](http://cdn.ayusummer233.top/DailyNotes/202302202128816.png)
>
> ![image-20230220212938728](http://cdn.ayusummer233.top/DailyNotes/202302202129747.png)
>
> 虽然变大了但是音质并不会有改善(甚至似乎可能会降低)

转换完成后将其剪切到了 dataset_raw 目录下:

> ![image-20230220213357112](http://cdn.ayusummer233.top/DailyNotes/202302202133131.png)

---



## 数据预处理

### 重新采样至 32khz

使用

```bash
python resample.py
```

> ![image-20230220230705929](http://cdn.ayusummer233.top/DailyNotes/202302202307943.png)
>
> 居然还会少依赖, 感觉有点没底, 手动装下
>
> ```bash
> pip install librosa -i https://pypi.mirrors.ustc.edu.cn/simple/
> ```
>
> ![image-20230220231019919](http://cdn.ayusummer233.top/DailyNotes/202302202310977.png)
>
> 好, 版本开始偏差了, 希望人没事(
>
> ![image-20230220231104375](http://cdn.ayusummer233.top/DailyNotes/202302202311393.png)
>
> 重新
>
> ```bash
> python resample.py
> ```
>
> ![image-20230220231353598](http://cdn.ayusummer233.top/DailyNotes/202302202313619.png)
>
> 寄
>
> 重新
>
> ```bash
> pip install -r requirements.txt -i https://pypi.mirrors.ustc.edu.cn/simple/
> ```
>
> ![image-20230220231519991](http://cdn.ayusummer233.top/DailyNotes/202302202315012.png)
>
> 哈哈,寄
>
> ---
>
> 翻看下 [sovits3.0一键脚本（小狼躺平了，所以是深夜诗人修改版本,已更新32k/48k分支切换）.ipynb - Colaboratory (google.com)](https://colab.research.google.com/drive/1_-gh9i-wCPNlRZw6pYF-9UufetcVrGBX?usp=sharing#scrollTo=BMWfCXSzaABl) 看看这里用的什么版本
>
> ![image-20230220231943535](http://cdn.ayusummer233.top/DailyNotes/202302202319589.png)
>
> 尝试安装
>
> ```bash
> pip install librosa==0.8.1 -i https://pypi.mirrors.ustc.edu.cn/simple/
> ```
>
> ![image-20230220232039914](http://cdn.ayusummer233.top/DailyNotes/202302202320948.png)
>
> 然后重新
>
> ```bash
> pip install -r requirements.txt -i https://pypi.mirrors.ustc.edu.cn/simple/
> ```
>
> ![image-20230220232104165](http://cdn.ayusummer233.top/DailyNotes/202302202321181.png)
>
> 看样子没有问题了
>
> ---
>
> 尝试重新运行
>
> ```bash
> python resample.py
> ```
>
> ![image-20230220232139439](http://cdn.ayusummer233.top/DailyNotes/202302202321509.png)
>
> 似乎正常跑起来了, 就是这个占用有点恐怖
>
> ![image-20230220232151574](http://cdn.ayusummer233.top/DailyNotes/202302202321729.png)
>
> 就当无事发生.jpg(
>
> ![image-20230220232943621](http://cdn.ayusummer233.top/DailyNotes/202302202329668.png)

---

### 自动划分训练集 验证集  测试集  以及自动生成配置文件

```bash
python preprocess_flist_config.py
# 注意
# 自动生成的配置文件中，说话人数量n_speakers会自动按照数据集中的人数而定
# 为了给之后添加说话人留下一定空间，n_speakers自动设置为 当前数据集人数乘2
# 如果想多留一些空位可以在此步骤后 自行修改生成的config.json中n_speakers数量
# 一旦模型开始训练后此项不可再更改
```

> ![image-20230220233122950](http://cdn.ayusummer233.top/DailyNotes/202302202331970.png)
>
> ![image-20230220233252284](http://cdn.ayusummer233.top/DailyNotes/202302202332321.png)

---

### 生成hubert与f0

```bash
python preprocess_hubert_f0.py
```

> ![image-20230220235151763](http://cdn.ayusummer233.top/DailyNotes/202302202351827.png)

---

## 训练

```bash
python train.py -c configs/config.json -m 32k
```

> ![image-20230220235306861](http://cdn.ayusummer233.top/DailyNotes/202302202353878.png)
>
> 又缺库, 那继续参考 [sovits3.0一键脚本（小狼躺平了，所以是深夜诗人修改版本,已更新32k/48k分支切换）.ipynb - Colaboratory (google.com)](https://colab.research.google.com/drive/1_-gh9i-wCPNlRZw6pYF-9UufetcVrGBX?usp=sharing#scrollTo=BMWfCXSzaABl)
>
> ![image-20230220235719441](http://cdn.ayusummer233.top/DailyNotes/202302202357458.png)
>
> ```bash
> pip install tensorboard==2.11.2 -i https://pypi.mirrors.ustc.edu.cn/simple/
> ```
>
> ![image-20230220235856427](http://cdn.ayusummer233.top/DailyNotes/202302202358454.png)
>
> 重新
>
> ```bash
> python train.py -c configs/config.json -m 32k
> ```
>
> ![image-20230220235941628](http://cdn.ayusummer233.top/DailyNotes/202302202359647.png)
>
> 悲, 看看有没有其他版本
>
> ```bash
> pip install tensorboard== -i https://pypi.mirrors.ustc.edu.cn/simple/
> ```
>
> ![image-20230221000144402](http://cdn.ayusummer233.top/DailyNotes/202302210001416.png)
>
> 装下 12.0 试试
>
> ```bash
> pip install tensorboard==2.12.0 -i https://pypi.mirrors.ustc.edu.cn/simple/
> ```
>
> ![image-20230221000205968](http://cdn.ayusummer233.top/DailyNotes/202302210002992.png)
>
> ---
>
> 重新
>
> ```bash
> python train.py -c configs/config.json -m 32k
> ```
>
> ![image-20230221000224512](http://cdn.ayusummer233.top/DailyNotes/202302210002547.png)
>
> 悲, 试试 11.0
>
> ```bash
> pip install tensorboard==2.11.0 -i https://pypi.mirrors.ustc.edu.cn/simple/
> ```
>
> ![image-20230221000347579](http://cdn.ayusummer233.top/DailyNotes/202302210003598.png)
>
> ---
>
> 重新
>
> ```bash
> python train.py -c configs/config.json -m 32k
> ```
>
> ![image-20230221000421441](http://cdn.ayusummer233.top/DailyNotes/202302210004467.png)
>
> 开始怀疑是 torch 版本的问题了
>
> ![image-20230221000453958](http://cdn.ayusummer233.top/DailyNotes/202302210004014.png)
>
> ![image-20230221000533037](http://cdn.ayusummer233.top/DailyNotes/202302210005058.png)
>
> 是一致的
>
> 继续薅下 [sovits3.0一键脚本（小狼躺平了，所以是深夜诗人修改版本,已更新32k/48k分支切换）.ipynb - Colaboratory (google.com)](https://colab.research.google.com/drive/1_-gh9i-wCPNlRZw6pYF-9UufetcVrGBX?usp=sharing#scrollTo=BMWfCXSzaABl):
>
> ![image-20230221000656109](http://cdn.ayusummer233.top/DailyNotes/202302210006122.png)
>
> 🤣 我的问题, 难搞, 在重搞之前先再试试降下 tensorboard 版本(不过如果是通过 torch 调用的话估计没啥用)
>
> ```bash
> pip install tensorboard==2.10.0 -i https://pypi.mirrors.ustc.edu.cn/simple/
> ```
>
> ![image-20230221000905957](http://cdn.ayusummer233.top/DailyNotes/202302210009978.png)
>
> 降级不动了, 那估计要重新搞了, 先在 colab 上泡泡试试吧
>
> ---
>
> 更新: 最终与 Colab 脚本保持一致, 使用 Torch 1.13.1 + CUDA 11.6 成功训练了模型
>
> ![image-20230221204019157](http://cdn.ayusummer233.top/DailyNotes/202302212040230.png)

如果要停止训练的话可以直接 `Ctrl + C`, 下次训练会自动加载上一个保存的 checkpoint

> ![image-20230221204413148](http://cdn.ayusummer233.top/DailyNotes/202302212044223.png)
>
> 3070Ti 跑了 12h 只跑了 30 个不到的 epoch, 先试试推理(

---

## 推理

> [soVITS3.0推理教程 - 哔哩哔哩 (bilibili.com)](https://www.bilibili.com/read/cv20533940?spm_id_from=333.999.0.0)

### 准备人声+BGM

在 [Releases · Anjok07/ultimatevocalremovergui (github.com)](https://github.com/Anjok07/ultimatevocalremovergui/releases) 下载并安装 [ultimatevocalremovergui](https://github.com/Anjok07/ultimatevocalremovergui) 

AssetStudio 解出来的 AudioCllip 目录下有个 `op_short.wav`  是 Desire, 总共 `2:04` 

使用 UVR5 将该音频分割成 BGM + 人声

![image-20230221205848532](http://cdn.ayusummer233.top/DailyNotes/202302212058560.png)

> 效果还是很不错的 
>
> ![image-20230221210819235](http://cdn.ayusummer233.top/DailyNotes/202302212108250.png)
>
> 分别用 `3_HP-Vocal-UVR` 和 `5_HP-Karaoke-UVR` 分离了试试, 前者分离出的 BGM 不包含和声, 后者包含

---

### 开始推理

得到人声干声之后就可以进行推理了, 将干声文件放在 `raw` 目录下

> ![image-20230221211139015](http://cdn.ayusummer233.top/DailyNotes/202302212111031.png)

根据注释修改 `inference_main.py` 中的如下行

> ![image-20230221211451437](http://cdn.ayusummer233.top/DailyNotes/202302212114467.png)
>
> - 更改`model_path`为你自己训练的最新模型记录点
> - 将待转换的音频放在`raw`文件夹下
> - `clean_names` 写待转换的音频名称
> - `trans` 填写变调半音数量
> - `spk_list` 填写合成的说话人名称

执行 `inference_main.py`

```bash
python .\inference_main.py
```

