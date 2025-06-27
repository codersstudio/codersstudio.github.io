---
outline: deep
---

# 코더스 시작하기

The coders tool is distributed via [Nuget](https://www.nuget.org/packages/coders).

### 설치 방법

Run the following command to install the coders tool:

```bash
dotnet tool install --global coders---
outline: deep
---

# 코더스 시작하기

코더스 툴은 [Nuget](https://www.nuget.org/packages/coders) 를 통해 배포됩니다.

### 설치 방법

아래 명령어를 실행하여 코더스 툴을 설치합니다.

```bash
dotnet tool install --global coders
```

설치가 완료되면, 터미널에서 아래 명령어를 입력하여 코더스를 실행할 수 있습니다.

```bash
coders
```

```
coders 2.1.106.0
Copyright (C) 2023 coders

  Command       Show usage.
  init          Create config file.
  create        Creates the platform basic structure.
  build         Builds the program source code.
  platform      Add new platform.
  export        Export the document.
  serve         Detects changes in files and rebuilds them.
  combine
  help          Prints the usage.
  ```


coders init 명령어를 실행하여 초기 파일을 생성합니다.

```bash
coders init
```

초기파일이 생성되면 coders.yml 파일을 편집합니다.

```yml
author: "my email"
version: "1.0.0"
entry: "./main.jssp"
projectName: "Demo"
llmOptions:
  # api key can only be set as an environment variable.
  apiKey: "OPENAI_API_KEY"
  model: "gpt-3.5-turbo"
  # model: "llama3" # run "ollama run llama3"
  # model: "llama3" # run "ollama run llama3"
projects:
- name: "springboot3 project"
  platform: "springboot3"
  outPath: "./out/springboot3"
  configs:
    package: "com.coders.demo"
- name: "flutter project"
  platform: "flutter"
  outPath: "./out/flutter"
  configs:
    package: "com.coders.demo"
- name: "mysql project"
  platform: "mysql"
  outPath: "./out/mysql"
  configs: {}
- name: "reactjs project"
  platform: "reactjs"
  outPath: "./out/reactjs"
  configs: {}
- name: "vuejs project"
  platform: "vuejs"
  outPath: "./out/vuejs"
  configs: {}
```
auther, project name을 변경해 줍니다. outPath는 빌드시 소스가 변환되어 저장되는 경로입니다.
다음 명령어로 각 Platform에 필요한 파일들들 생성해 줍니다.

```bash
coders create
```

coders.yml 파일의 outPath 경로에 Platform에 필요한 파일들이 복사됩니다.
이후 다음 명령어로 jssp 파일을 수정하고 빌드합니다.

```bash
coders build
```

