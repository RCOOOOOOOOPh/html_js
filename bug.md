最近这几天遇到了一个bug，一台刚拿到两周的笔记本电脑，每天早上刚来的时候、或者是刚吃完饭的时候输密码正常，但其他时候（比如重启后）经常进不去，很认真地输入密码还是错的。

想到之前在知乎看到的问题“你见过什么神奇的bug”，有温度、振动等影响硬件的，所以刚开始以为是电脑温度高导致某些硬件出问题。每天刚来（或者刚吃完饭）的时候电脑是冷的，可以输进去，而用一会儿电脑再重启，电脑是热的，就很难输进去。试着搞了半天，还是无济于事。然后又想到一个bug是，坐着敲密码可以解锁电脑，站着敲就不行，因为有两个键装反了，但是坐着敲是盲打所以不受影响。还跟同事调侃了下。

ps：这个电脑有个小问题是“9”键不太灵，需要使劲敲才能行。我之前并没有往这个方向想，而只是在打字的时候使劲敲9。

刚才发现非常快速地输入密码，也可以解锁电脑。想着是不是跟输入速度有关系？但是这种解释同样玄学。

然后在用另一个设备登录一个之前用这个笔记本注册的网络账号的时候，发现同样死活登录不上去。于是我查了一下浏览器的密码记录。我的密码里有个9，但是我发现浏览器记录的密码里根本没有那个9..........

所以说，当初设置密码的时候我就没在意这个9是否输入进去，所以开机密码、账号密码里大多都没有9。而我的一个习惯是，不管是早上还是午饭后来到工位，先站着打开笔记本，输入密码打开电脑，然后去接杯水再回来。所以bug的原因是，站着输入密码的时候打得飞快，9因为键盘不灵大概率没有被记录下来，正好跟没有9的密码一致；而工作中重启之后是坐着的，虽然也是盲打，但是比站着打得认真，因此9被记录下来了，也就打不开电脑了。