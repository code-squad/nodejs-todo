# 쿵쿵따 게임 기획서 및 설계서

## 목차

### 기획서

[1. 개요](#1-개요)

[2. 구조 및 형태](#2-구조-및-형태)

&nbsp;&nbsp;[2.1. Flow Chart](#21-Flow-Chart)

&nbsp;&nbsp;&nbsp;&nbsp;[2.1.1. 로그인](#211-로그인)

&nbsp;&nbsp;&nbsp;&nbsp;[2.1.2. 대기실 입장](#212-대기실-입장)

&nbsp;&nbsp;&nbsp;&nbsp;[2.1.3. 게임 플레이](#213-게임-플레이)

[3. 게임 시스템](#3-게임-시스템)

&nbsp;&nbsp;[3.1. 게임 규칙](#31-게임-규칙)

&nbsp;&nbsp;[4. UI](#4-UI) 

&nbsp;&nbsp;[4.1. 로그인 화면](#41-로그인-화면)

&nbsp;&nbsp;[4.2. 회원가입 화면](#42-회원가입-화면)

&nbsp;&nbsp;[4.3. 에러  모달](#43-에러-모달)

&nbsp;&nbsp;[4.4. 대기실 목록](#44-대기실-목록)

&nbsp;&nbsp;[4.5. 대기실 생성 화면](#45-대기실-생성-화면)

&nbsp;&nbsp;[4.6. 대기실](#46-대기실)

&nbsp;&nbsp;[4.7. 게임 화면](#47-게임-화면)

### 설계서

[1. 구조](#1-구조)

[2. 데이터 관리](#2-데이터-관리)

&nbsp;&nbsp;[2.1. 데이터 저장 방법](#21-데이터-저장-방법)

&nbsp;&nbsp;[2.2. 데이터 별 파일 시스템 구조](#22-데이터-별-파일-시스템-구조)

[3. 통신 메시지 형식](#3-통신-메시지-형식)

&nbsp;&nbsp;[3.1. 사용자 인증 관련](#31-사용자-인증-관련)

&nbsp;&nbsp;[3.2. 로비](#32-로비)

&nbsp;&nbsp;[3.3. 대기실](#33-대기실)

&nbsp;&nbsp;[3.4. 게임 플레이](#34-게임-플레이)

## 기획서

### 1. 개요

터미널에서 플레이할 수 있는 쿵쿵따 게임입니다. 

### 2. 구조 및 형태

#### 2.1. Flow Chart

##### 2.1.1. 로그인

![login](https://user-images.githubusercontent.com/18232901/58701906-40d29900-83df-11e9-8e28-e4c3984b0579.jpg)

##### 2.1.2. 참여

![openroom](https://user-images.githubusercontent.com/18232901/58701925-4e881e80-83df-11e9-93b1-82543ca2bccb.jpg)

##### 2.1.3. 게임 플레이

![gameplay](https://user-images.githubusercontent.com/18232901/58701664-7b880180-83de-11e9-9d0b-14c12e1ce073.jpg)

### 3. 게임 시스템

#### 3.1. 게임 규칙

- 단어만 입력할 수 있다.
- 한방 단어는 입력할 수 없다.
- 한글만 입력할 수 있다.
- 최소 두 글자 이상이어야 한다.
- 게임에 참여한 한 명이 다음 단어를 제한 시간 안에 입력하지 못하면 승리한다.
- 하드 모드의 경우, 이미 사용한 단어를 한 번 더 사용하면 패배하게 된다. 

### 4. UI 구성

#### 4.1. 로그인 화면

<img width="967" alt="page1" src="https://user-images.githubusercontent.com/18232901/59142492-2f4e4a00-89fa-11e9-97c7-bd397dc37447.png">

1. ID 및 비밀번호 input 요소
사용자가 반드시 입력해야 하며, id는 영문자만 허용하며, 비밀번호는 최소 4글자에서 32글자까지 허용한다.
2. 로그인 버튼
버튼을 누르면 사용자가 입력한 값이 올바른지 검사한 다음, 올바르면 서버에 로그인 요청을 보낸다.
3. 회원가입 버튼
버튼을 누르면 회원가입 창이 새로 뜬다.

#### 4.2. 회원가입 화면

<img width="967" alt="page2" src="https://user-images.githubusercontent.com/18232901/59142494-3c6b3900-89fa-11e9-977e-118e52cb0552.png">

1. ID 및 비밀번호 input 요소
로그인 화면에서와 같이 사용자가 반드시 입력해야 하며, id는 영문자만 허용하며, 비밀번호는 최소 4글자에서 32글자까지 허용한다.
2. 가입하기 버튼
버튼을 누르면 사용자가 입력한 값이 올바른지 검사한 다음, 올바르면 서버에 회원가입 요청을 보낸다. 서버는 입력한 ID가 이미 존재하는지 확인하고 계정을 새로 만든다.

#### 4.3. 에러 모달

<img width="967" alt="page3" src="https://user-images.githubusercontent.com/18232901/59142498-455c0a80-89fa-11e9-8d2b-c18dfac88cd5.png">

1. 에러 모달 창
클라이언트나 서버에서 발생한 오류를 출력하는 모달 창.

#### 4.4. 대기실 목록

<img width="967" alt="page4" src="https://user-images.githubusercontent.com/18232901/59142501-4db44580-89fa-11e9-9371-b10e532d8eb3.png">

1. 대기실 
방 제목, 대기 중인 인원 수와 설정된 게임 모드에 대한 정보를 보여준다. 게임이 진행 중인 방은 보이지 않는다. 더블 클릭하면 방에 접속할 수 있다. 
2. 대기실 페이징 버튼
한 페이지에 최대 6개의 대기실이 존재하며 버튼을 눌러 이전 목록 또는 다음 목록을 가져올 수 있다.
3. 유저 목록
현재 접속한 유저 목록을 보여 준다.
4. 유저 목록 페이징 버튼
한 페이지에 최대 15명의 유저를 보여주며 버튼을 눌러 이전 목록 또는 다음 목록을 가져올 수 있다.
5. 방 만들기 버튼
방 만들기 버튼을 불러온다.

#### 4.5. 대기실 생성 화면

<img width="967" alt="page5" src="https://user-images.githubusercontent.com/18232901/59142504-59077100-89fa-11e9-98fb-0c7fec4b11d3.png">

1. 대기실 이름 
대기실 이름을 설정한다. 비어있지만 않으면 생성할 수 있다.
2. 최대 인원 수 설정
게임에 참여할 수 있는 최대 인원 수를 정할 수 있다. 값은 2에서 8까지 설정할 수 있다.
3. 게임 모드 선택
쉬운 모드와 어려운 모드를 선택한다. 기본 값은 쉬운 모드다.
4. 생성 버튼
방을 생성하기 전에 입력 값을 검증한 다음 서버로 요청을 보낸다. 방이 만들어지면 자동으로 방에 접속된다.

#### 4.6. 대기실

<img width="967" alt="page6" src="https://user-images.githubusercontent.com/18232901/59142505-615fac00-89fa-11e9-9a01-5fc25576a264.png">

1. 게임 모드 표시 
현재 설정된 게임 모드를 보여준다.
2. 시스템 메시지 출력 창
서버에서 오는 메시지를 출력하는 창이다. 
3. 유저 아이콘
유저가 대기실에 들어오면 유저 아이콘과 이름이 함께 뜬다. 
4. 나가기 버튼
방에서 나갈 때 누르는 버튼이다.

#### 4.7. 게임 화면

<img width="967" alt="page7" src="https://user-images.githubusercontent.com/18232901/59142510-6ae91400-89fa-11e9-99ed-72ead54ce820.png">

1. 제시어 표시
다음 단어를 이어 나갈 때 필요한 제시어를 출력하는 곳이다. 
2. 제한 시간 출력 창
유저가 디음 단어를 입력해야 하는 남은 시간을 출력한다.
3. 시스템 메시지 출력 창
서버에서 오는 메시지를 출력하는 창이다. 
4. 턴 표시
단어를 입력해야 하는 유저를 표시한다.
5. 나가기 버튼
게임 도중에는 나갈 수 없으므로 버튼을 클릭해도 아무것도 할 수 없도록 disable 상태로 만든다.

## 설계서

### 1. 요청 흐름

![requestFlow](https://user-images.githubusercontent.com/18232901/59158699-052f8180-8af9-11e9-8654-f8bd459c8a5f.jpg)


### 2. 클래스 구조

### 3. 데이터 저장

#### 3.1. 데이터 저장 방법

데이터 저장은 일반 텍스트 파일로 저장한다. 최상위 디렉토리의 이름을 `.db` 라고 하며, 사용되는 영역에 따라 하위 디렉토리를 생성한다.

#### 3.2. 데이터 별 파일 시스템 구조

인증과 관련된 디렉토리는 `.db/auth`에 저장한다. 디렉토리에 저장되는 파일의 이름은 사용자 ID로 하며, 파일의 내용은 패스워드이다.

### 3. 통신 메시지 형식

서버와 클라이언트 간 주고 받을 데이터의 형식은 JSON으로 한다. 

#### 3.1. 사용자 인증 관련

##### 3.1.1. 회원 가입

###### 요청

```json
{
  "command": "auth",
  "subcommand": "join",
  "data": {
    "userid": "user id",
    "password": "password"
  }
}
```

###### 응답

**요청 처리 성공**

```json
{
  "result": "success"
}
```

**요청 처리 실패** 

```json
{
  "result": "fail",
  "message": "error message"
}
```

요청 처리 실패와 관련된 메시지는 항상 위와 같은 형식이다.

##### 3.1.2. 로그인

###### 요청

```json
{
  "command": "auth",
  "subcommand": "login",
  "data": {
    "userid": "user id",
    "password": "password" 
  }
}
```

###### 응답

**요청 처리 성공**

```json
{
  "result": "success",
  "data": {
    "userid": "user name"
  }
}
```

#### 3.2. 로비

##### 3.2.1. 대기실 목록 요청

###### 요청

```json
{
  "command": "room",
  "subcommand": "list"
}
```

##### 응답

**요청 처리 성공**

```json
{
  "result": "success",
  "data": [
    {
      "name": "room name",
      "roomid": "id",
      "member": "5",
      "mode": "easy"
    }, ...
  ]
}
```

##### 3.2.2. 대기실 입장

###### 요청

```json
{
  "command": "room",
  "data": {
    "subcommand": "join",
    "roomid": "id",
    "userid": "user id"
  }
}
```

##### 응답

###### 요청 처리 성공

```json
{
  "result": "success",
  "data": {
    "roomid": "room id"
  }
}
```

##### 3.2.3. 대기실 생성

###### 요청

```json
{
  "command": "room",
  "subcommand": "create",
  "data": {
    "name": "room name",
    "mode": "hard",
    "userid": "userid"
  }
}
```

###### 응답

**요청 처리 성공**

```json
{
  "result": "success"
}
```

#### 3.3. 대기실

##### 3.3.1. 게임 준비

###### 요청

```json
{
  "command": "game",
  "subcommand": "ready"
}
```

###### 응답

**요청 처리 성공**

```json
{
  "result": "success"
}
```

##### 3.3.2. 게임 준비 해제

###### 요청

```json
{
  "command": "game",
  "subcommand": "undoReady"
}
```

###### 응답

**요청 처리 성공**

```json
{
  "result": "success"
}
```

##### 3.3.3. 게임 시작

###### 요청

```json
{
  "command": "game",
  "subcommand": "start"
}
```

###### 응답

**요청 처리 성공**

```json
{
  "result": "success"
}
```



#### 3.4. 게임 플레이

##### 3.4.1. 단어 제출

###### 요청

```json
{
  "command": "game",
  "subcommand": "submit"
}
```

###### 응답

**요청 처리 성공**

```json
{
  "result": "success"
}
```
