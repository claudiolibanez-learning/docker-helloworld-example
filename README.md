## Criar imagem a partir do Dockerfile

```bash
$ docker build -t claudiolibanez/helloworld:0.0.1.RELEASE .
```

## Criar um container a partir da imagem criada

```bash
$ docker run  -d --name helloworld -p 3000:3000 claudiolibanez/helloworld:0.0.1.RELEASE
```

## Sobe a Imagem para o Docker Hub

```bash
$ docker push claudiolibanez/helloworld:0.0.1.RELEASE
```