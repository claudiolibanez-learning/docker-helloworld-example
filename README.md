```bash
$ docker build -t claudiolibanez/helloworld:0.0.1.RELEASE .
```

```bash
$ docker run  -d --name helloworld -p 3000:3000 claudiolibanez/helloworld:0.0.1.RELEASE
```