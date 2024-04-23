# CH4-复合数据类型

---

- [CH4-复合数据类型](#ch4-复合数据类型)
	- [CH4.1.数组](#ch41数组)
		- [练习4.1.计算两个sha256中不同bit的数目](#练习41计算两个sha256中不同bit的数目)
		- [练习4.2.计算输入字符串的哈希](#练习42计算输入字符串的哈希)
	- [CH4.2.Slice](#ch42slice)
		- [练习4.3.重写reverse函数](#练习43重写reverse函数)
		- [练习4.4.编写旋转函数](#练习44编写旋转函数)
		- [练习4.5.消除相邻重复字符串](#练习45消除相邻重复字符串)
		- [练习4.6.去除相邻空格](#练习46去除相邻空格)
		- [练习4.7.翻转Slice](#练习47翻转slice)
	- [CH4.3.Map](#ch43map)
		- [练习4.8.重写charcount](#练习48重写charcount)
		- [练习4.9.词频统计](#练习49词频统计)
	- [CH4.4.结构体](#ch44结构体)
	- [CH4.5.Json](#ch45json)
		- [练习4.10.修改issues程序按照时间分类](#练习410修改issues程序按照时间分类)
		- [练习4.11](#练习411)
		- [练习4.12](#练习412)

---

## CH4.1.数组

### 练习4.1.计算两个sha256中不同bit的数目

**练习 4.1：** 编写一个函数，计算两个SHA256哈希码中不同bit的数目。（参考2.6.2节的PopCount函数。)

```go
// 编写一个函数，计算两个SHA256哈希码中不同bit的数目
package main

import "crypto/sha256"

// 比较两个 SHA256 哈希码中不同 bit 的数量
func diffBitCount(hash1, hash2 [32]byte) int {
	count := 0
	for i := 0; i < 32; i++ {
		// 异或操作，相同为 0，不同为 1
		diff := hash1[i] ^ hash2[i]
		diff_int := popCountUint8(diff)
		// 计算不同 bit 的数量
		count += diff_int
	}
	return count
}

// 计算一个 unit8 中 1 的数量
func popCountUint8(x uint8) int {
	count := 0
	for x != 0 {
		x = x & (x - 1)
		count++
	}
	return count
}

func main() {
	c1 := sha256.Sum256([]byte("x"))
	c2 := sha256.Sum256([]byte("X"))
	println(diffBitCount(c1, c2))
}

```

![image-20240423112001917](http://cdn.ayusummer233.top/DailyNotes/image-20240423112001917.png)

---

### 练习4.2.计算输入字符串的哈希

**练习 4.2：** 编写一个程序，默认情况下打印标准输入的SHA256编码，并支持通过命令行flag定制，输出SHA384或SHA512哈希算法。

```go
// 编写一个程序，默认情况下打印标准输入的SHA256编码，并支持通过命令行flag定制，输出SHA384或SHA512哈希算法。
package main

import (
	"bufio"
	"crypto/sha256"
	"crypto/sha512"
	"flag"
	"fmt"
	"os"
)

// 计算数据的 SHA256 哈希码
func sha256Hash(data []byte) string {
	sha256 := sha256.Sum256(data)
	return fmt.Sprintf("%x", sha256)
}

// 计算数据的 SHA384 哈希码
func sha384Hash(data []byte) string {
	sha384 := sha512.Sum384(data)
	return fmt.Sprintf("%x", sha384)
}

// 计算数据的 SHA512 哈希码
func sha512Hash(data []byte) string {
	sha512 := sha512.Sum512(data)
	return fmt.Sprintf("%x", sha512)
}

var hashType = flag.String("ht", "sha256", "hashType-支持 sha256, sha384, sha512")

func main() {
	flag.Parse()

	hashType := *hashType

	// 如果输入的哈希类型不支持，则退出
	if hashType != "sha256" && hashType != "sha384" && hashType != "sha512" {
		fmt.Printf("不支持的哈希类型 %s\n", hashType)
		return
	}

	fmt.Printf("请输入需要计算 %s 哈希码的数据，输入 exit 退出\n", hashType)

	// 读取一行输入
	input := bufio.NewScanner(os.Stdin)
	for input.Scan() {
		// 遇到  exit 时退出
		if input.Text() == "exit" {
			break
		}

		data := input.Bytes()
		switch hashType {
		case "sha256":
			hash := sha256Hash(data)
			fmt.Println(hash[:])
		case "sha384":
			hash := sha384Hash(data)
			fmt.Println(hash[:])
		case "sha512":
			hash := sha512Hash(data)
			fmt.Println(hash[:])
		default:
			fmt.Printf("不支持的哈希类型 %s\n", hashType)
		}
	}
}

```

![image-20240423112226914](http://cdn.ayusummer233.top/DailyNotes/image-20240423112226914.png)

---

## CH4.2.Slice

Slice（切片）代表变长的序列，序列中每个元素都有相同的类型。一个slice类型一般写作[]T，其中T代表slice中元素的类型；slice的语法和数组很像，只是没有固定长度而已。

---

### 练习4.3.重写reverse函数

**练习 4.3：** 重写reverse函数，使用数组指针代替slice。

```go
// 重写reverse函数，使用数组指针代替slice。
package main

import "fmt"

// 重写reverse函数，使用数组指针代替slice。
func reverse(s *[]int) {
	for i, j := 0, len(*s)-1; i < j; i, j = i+1, j-1 {
		(*s)[i], (*s)[j] = (*s)[j], (*s)[i]
	}
}

func main() {
	var a = []int{0, 1, 2, 3, 4, 5}
	reverse(&a)
	fmt.Println(a)
}

```

![image-20240423113945354](http://cdn.ayusummer233.top/DailyNotes/image-20240423113945354.png)

----

### 练习4.4.编写旋转函数

**练习 4.4：** 编写一个rotate函数，通过一次循环完成旋转。

利用 apppend 把开头的 n 个元素追加到 slice 的尾部然后从 n 位置截取到末尾返回即可

```go
package main

import "fmt"

// 编写一个rotate函数，通过一次循环完成旋转 slice 中的所有元素。
func rotate(s []int, n int) []int {
	for i := 0; i < n; i++ {
		s = append(s, s[i])
	}
	return s[n:]
}

func main() {
	var a = []int{0, 1, 2, 3, 4, 5}
	fmt.Printf("旋转前：%v\n", a)
	a = rotate(a, 2)
	fmt.Printf("旋转 2 位后：%v\n", a)
}

```

![image-20240423133818261](http://cdn.ayusummer233.top/DailyNotes/image-20240423133818261.png)

---

### 练习4.5.消除相邻重复字符串

**练习 4.5：** 写一个函数在原地完成消除[]string中相邻重复的字符串的操作。

相邻比较, copy 移位然后重新切片即可

```go
package main

import "fmt"

// 写一个函数在原地完成消除[]string中相邻重复的字符串的操作。 写一个函数在原地完成消除[]string中相邻重复的字符串的操作。
func removeDuplicate(s []string) {
	// 直接在原 slice 上操作, 无需返回值
	for i := 0; i < len(s)-1; i++ {
		if s[i] == s[i+1] {
			// 删除重复的元素
			copy(s[i:], s[i+1:])
			// 重新切片
			s = s[:len(s)-1]
			i--
		}
	}
	fmt.Printf("去重后：%v\n", s)
}

func main() {
	var s = []string{"a", "b", "b", "c", "c", "c", "d", "e", "e", "f"}
	fmt.Printf("原始 slice：%v\n", s)
	removeDuplicate(s)
}

```

---

### 练习4.6.去除相邻空格

**练习 4.6：** 编写一个函数，原地将一个UTF-8编码的[]byte类型的slice中相邻的空格（参考unicode.IsSpace）替换成一个空格返回

和上一题差不多的思路, 把重复字符改成空格了而已

```go
package main

import "fmt"

// 编写一个函数，原地将一个UTF-8编码的[]byte类型的slice中相邻的空格（参考unicode.IsSpace）替换成一个空格返回
func replaceSpace(s []byte) []byte {
	for i := 0; i < len(s)-1; i++ {
		if s[i] == ' ' && s[i+1] == ' ' {
			copy(s[i:], s[i+1:])
			s = s[:len(s)-1]
			i--
		}
	}
	return s
}

func main() {
	var s = []byte("a b  c   d    e")
	fmt.Printf("原始 slice：%v\n", string(s))
	s = replaceSpace(s)
	fmt.Printf("去除重复空格后：%v\n", string(s))
}

```

![image-20240423142903164](http://cdn.ayusummer233.top/DailyNotes/image-20240423142903164.png)

---

### 练习4.7.翻转Slice

**练习 4.7：** 修改reverse函数用于原地反转UTF-8编码的[]byte。是否可以不用分配额外的内存？

感觉描述的不是很清楚, reverse 函数本身就是在原地操作的

```go
// reverse reverses a slice of ints in place.
func reverse(s []int) {
	for i, j := 0, len(s)-1; i < j; i, j = i+1, j-1 {
		s[i], s[j] = s[j], s[i]
	}
}
```

---

## CH4.3.Map



### 练习4.8.重写charcount

**练习 4.8：** 修改charcount程序，使用unicode.IsLetter等相关的函数，统计字母、数字等Unicode中不同的字符类别。

```go
// 修改charcount程序，使用unicode.IsLetter等相关的函数，统计字母、数字等Unicode中不同的字符类别。

package main

import (
	"bufio"
	"fmt"
	"io"
	"os"
	"unicode"
	"unicode/utf8"
)

func main() {
	counts := map[string]int{
		"letter":  0,
		"digit":   0,
		"space":   0,
		"punct":   0,
		"control": 0,
		"other":   0,
	}
	var utflen [utf8.UTFMax + 1]int // count of lengths of UTF-8 encodings
	invalid := 0                    // count of invalid UTF-8 characters

	in := bufio.NewReader(os.Stdin)

	for {
		r, n, err := in.ReadRune() // returns rune, nbytes, error
		if err == io.EOF {
			break
		}
		if err != nil {
			fmt.Fprintf(os.Stderr, "charcount: %v\n", err)
			os.Exit(1)
		}

		if r == utf8.RuneError && n == 1 {
			invalid++
			continue
		}
		switch {
		case unicode.IsLetter(r):
			counts["letter"]++
		case unicode.IsDigit(r):
			counts["digit"]++
		case unicode.IsSpace(r):
			counts["space"]++
		case unicode.IsPunct(r):
			counts["punct"]++
		case unicode.IsControl(r):
			counts["control"]++
		default:
			counts["other"]++
		}
		utflen[n]++

	}

	fmt.Printf("category\tcount\n")
	for c, n := range counts {
		fmt.Printf("%q\t%d\n", c, n)
	}
	fmt.Print("\nlen\tcount\n")
	for i, n := range utflen {
		if i > 0 {
			fmt.Printf("%d\t%d\n", i, n)
		}
	}
	if invalid > 0 {
		fmt.Printf("\n%d invalid UTF-8 characters\n", invalid)
	}
}
```

![image-20240423151539764](http://cdn.ayusummer233.top/DailyNotes/image-20240423151539764.png)

---

### 练习4.9.词频统计

**练习 4.9：** 编写一个程序wordfreq程序，报告输入文本中每个单词出现的频率。在第一次调用Scan前先调用input.Split(bufio.ScanWords)函数，这样可以按单词而不是按行输入。

```go
package main

import (
	"bufio"
	"os"
)

func main() {
	var count map[string]int = make(map[string]int)

	scanner := bufio.NewScanner(os.Stdin)
	scanner.Split(bufio.ScanWords)
	for scanner.Scan() {
		count[scanner.Text()]++
	}
	for k, v := range count {
		println(k, v)
	}

}

```

```
Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Sed ac tellus eu odio commodo ornare. 
Praesent bibendum ex vel massa consectetur, et vulputate lacus sodales. 
Donec eu ante mauris. Cras vitae risus sed magna elementum congue.
Curabitur condimentum augue non leo bibendum, at ultrices tortor dictum.
Vivamus et aliquet eros. Fusce fringilla, justo id varius posuere, eros nisl faucibus lacus, 
sit amet pellentesque magna eros quis urna.
ibendum ex vel massa consectetur, et vulputate lacus sodales. 
Donec eu ante mauris. Cras vitae risus sed magna elementum congue.
Curabitur condimentum augue non leo bibendum, at ultrices tortor dictum.
Vivamus et aliquet eros. Fusce fringilla, justo id var
```

![image-20240423152039118](http://cdn.ayusummer233.top/DailyNotes/image-20240423152039118.png)

---

## CH4.4.结构体



---

## CH4.5.Json





---

### 练习4.10.修改issues程序按照时间分类

**练习 4.10：** 修改issues程序，根据问题的时间进行分类，比如不到一个月的、不到一年的、超过一年。

```go
// 修改issues程序，根据问题的时间进行分类，比如不到一个月的、不到一年的、超过一年。
package main

import (
	"fmt"
	"log"
	"time"

	github "GoLearning/Chapter/ch4/ch4_5_json/github"
)

func main() {
	// 获取当前时间(年月日)
	currentDate := time.Now()
	// 一个月前的时间
	oneMonthAgo := currentDate.AddDate(0, -1, 0)
	// 一年前的时间
	oneYearAgo := currentDate.AddDate(-1, 0, 0)

	classifyIssues := map[string][]*github.Issue{
		"一个月内": []*github.Issue{},
		"一年内":  []*github.Issue{},
		"一年前":  []*github.Issue{},
	}

	// result, err := github.SearchIssues(os.Args[1:])
	var repo = []string{"PKUFlyingPig/cs-self-learning"}
	result, err := github.SearchIssues(repo)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Printf("%d issues:\n", result.TotalCount)
	for _, item := range result.Items {
		if item.CreatedAt.After(oneMonthAgo) {
			classifyIssues["一个月内"] = append(classifyIssues["一个月内"], item)
		} else if item.CreatedAt.After(oneYearAgo) {
			classifyIssues["一年内"] = append(classifyIssues["一年内"], item)
		} else {
			classifyIssues["一年前"] = append(classifyIssues["一年前"], item)
		}
	}

	for k, v := range classifyIssues {
		fmt.Printf("Issues %s:\n", k)
		for _, item := range v {
			fmt.Printf("#%-5d %9.9s %.55s %v\n", item.Number, item.User.Login, item.Title, item.CreatedAt)
		}
	}

}

```

![image-20240423160903579](http://cdn.ayusummer233.top/DailyNotes/image-20240423160903579.png)

---

### 练习4.11

**练习 4.11：** 编写一个工具，允许用户在命令行创建、读取、更新和关闭GitHub上的issue，当必要的时候自动打开用户默认的编辑器用于输入文本信息。

> 调接口,暂时没需求,暂时不写了(

---

### 练习4.12

**练习 4.12：** 流行的web漫画服务xkcd也提供了JSON接口。例如，一个 https://xkcd.com/571/info.0.json 请求将返回一个很多人喜爱的571编号的详细描述。下载每个链接（只下载一次）然后创建一个离线索引。编写一个xkcd工具，使用这些离线索引，打印和命令行输入的检索词相匹配的漫画的URL。

![image-20240423161440046](http://cdn.ayusummer233.top/DailyNotes/image-20240423161440046.png)

单页漫画, 离线索引好做, 搞个 json 列表就行了, 简单做 571-580 十个索引













**练习 4.13：** 使用开放电影数据库的JSON服务接口，允许你检索和下载 https://omdbapi.com/ 上电影的名字和对应的海报图像。编写一个poster工具，通过命令行输入的电影名字，下载对应的海报。
