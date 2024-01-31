# SPACE STAGRAM

This is an application showing images of space by using nasa's api(https://api.nasa.gov/)

## What I will do

● Display five randomly selected images on the initial screen  
● Save likes if the user leaves or reloads the page  
● Animate the “like” action (a heart?)  
● Add a loading state while we wait for NASA’s API to return data  
● Create shareable links for each image  
● Add a start date-picker and an end date-picker to be able to browse photos between 2 dates.

<span style='background-color:#fff5b1'>And I will record almost everythig I do while making this application as a reference for me.</span>

###### How to create React app.

`mkdir space_stagram`
`cd space_stagram`
`npx create-react-app .`
`npm run start`

###### How to use git

`git init`
`git add .`
`git status`
`git commit -m "first commit"`
`git remote add origin url(for example, https://github.com/voiciJules/space_stagram.git)`
`git branch -m main`
`git push -u origin main`

###### How to use localStorage

LocalStorage 를 사용하면 페이지를 새로고침하거나 브라우저를 껐다 켜도 데이터가 사라지지 않고 남아 있다. developer inspect 로 들어가서 Application 란에 보면 LocalStorage 와 sessionStorage 부분을 찾아볼 수 있다.

- setItem(key, value)
  - `localStorage.setItem("datalist", JSON.stringify(data));`
  - JSON.stringify : object => string
  - JSON.parse : string => object
- getItem(key)
- removeItem(key)
- clear()

###### How to use Jest

1. Install Jest library `npm i jest --save-dev`
2. Change the script in package.json
   - "test" : "jest" or "jest --watchAll"
3. Jest 가 테스트 파일을 찾는 방법. `{filename}.test.js` or `{filename}.spec.js`
4. /test/Unit Test Folder/Unit Test File({filename}.test.js)
   /test/Integration Test Folder/Integration Test File({filename}.test.init.js)
5.

```
describe
 - test(it) : expect + matcher
 - test(it) : expect + matcher
 - test(it) : expect + matcher
 ...

 test(
    'two plus two is four', () => {
        expect(2 + 2).toBe(4);
    }
 )

 test(
    'two plus two is not five', () => {
        expect(2 + 2).not.toBe(5);
    }
 )
```

6. `npm test`
7. About Queries https://testing-library.com/docs/queries/about/
   - getBy : 일치하는 노드를 반환하고 일치 요소 없거나 둘이상의 일치가 발견되면 설명 오류를 발생함
   - queryBy : 일치하는 노드를 반환하고 없으면 null 반환함, 둘 이상의 일치항목 발견시 오류가 발생함
   - findBy ; 일치하는 요소가 발견되면 Promise를 반환함
8. 테스트 주도 개발

   - 원하는 기능의 테스트 코드 작성
   - 테스트 실행 => 실패
   - 테스트 코드에 맞는 실제 코드 작성
   - 테스트 실행 => 성공

###### Responsive Web

1. Media Query

   - @media (min-width: 768px) {}
   - @media (min-width: 768px) and (max-width: 1024px) {}
   - @media (min-width: 512px) and (max-width: 767px) {}
   - @media (max-width: 512px) {}

2. Fluid Grids => using em, rem, %
3. viewport
   - <meta name="viewport" content="width=device-width, initial-scale=1.0">
   - width: 100vw or height:100vh

###### Make this application available when accessing the website through a browser

- git에 홈페이지처럼 올리는 법 1(deploy)

  - npm i gh-pages 실행
  - package.json에 "homepage" : "https://voiciJules.github.io/space_stagram" 를 추가한다.
  - npm run build를 실행한다. (아마도 이 과정은 생략가능)
  - build 폴더가 생성된 것을 확인한다(최소화된 파일들) (생략가능 : 왜냐하면 아래서 npm deploy 하는 순간 위의 부분이 실행되기 때문)
  - package.json의 script에 "deploy" : "gh-pages -d build" 추가(생성된 빌드 폴더를 deploy 한다는 뜻으로 build 폴더 이름이 다르다면 그것에 맞춰서 설정해야 함.)
  - package.json의 script에 "predeploy" : "npm run build"
  - 위의 과정을 설명하자면, npm run deploy를 실행시, predeploy의 npm run build가 실행되고 "react-scripts build"에 의해서 build 파일이 생성된다. 그리고 deploy의 명령어에 따라 gh-pages로 생성된 build 파일을 deploy한다.

- git에 홈페이지처럼 올리는 법 2

  - 지금까지 작성한 모든 코드들을 깃허브 리포지토리에 커밋, 푸쉬한다.
  - 깃허브에 들어가서 배포하고 싶은 해당 리포지토리를 선택한다.
  - 해당 리포지토리에서 상단의 Settings 에 들어간다.
  - 제일 아래 부분으로 스크롤해서 Change repository visibility 를 public 으로 설정한다.
  - 그런 다음에, Pages 카테고리에 들어가서 Source 부분의 None 으로 되어 있는 부분을 master 혹은 main branch 로 변경하고 save 버튼을 누르면, Your site is published at 'https://....../...' 메세지를 볼 수 있다.
  - url 링크를 클릭해서 들어가면 사이트가 배포된 것을 볼 수 있다.
  - url 링크를 클릭해서 들어갔는데 사이트가 배포되지 않는다면,
  - 리액트 프로젝트에 가서 gh-pages 라이브러리를 인스톨한다( `npm install gh-pages --save-dev`)
  - package.json 설정하기
    "homepage" : "https://githubID.github.io/repository_name"를 "name" : "spaceStagram" 윗부분에 추가하기
    "predeploy" : "npm run build", "deploy" : "gh-pages -d build" 를 scripts 에 추가한다.
  - package.json 설정 완료 후, npm run deploy 실행한다.
  - 깃허브에 Settings 에 다시 돌아가서 Pages 카테고리에 돌아가면 site가 published 되어 있다는 설명이 나오는데, Source에 Branch 부분을 gh-pages 로 설정하고 저장한다. url을 통해 확인한다.

- 수정 후 재배포
  - `npm run deploy` : deploy를 하게 되면, 새로 빌드 되면서 수정된 사항이 업데이트 된다. 따라서 이 명령어를 입력하면 수정된 사항을 업데이트 해서 재배포 할 수 있다.

##### 2024-01-24

After npx create-react app, we can see the react webpage with the website address 'localhost:3000'. Let's elaborate each file in src folder.

- App.css : css file for style
- App.js : js file for making logic
- App.test.js : js file to test functionality or css, etc.
- index.css : probably I will not use this file
- logo.svg : I will not use this file
- reportWebVitals.js : a tool to check the efficiency of react
- setupTests.js : a file to use React testing library

###### What I did

- I deleted logo.svg file and reportWebVitals.js file.
- I tried to upload the files to GitHub. After pushing it with `git push -u origin main` command, it made an error as below.

  ````
  space_stagram git:(main) git push -u origin main
  To https://github.com/voiciJules/space_stagram.git
  ! [rejected] main -> main (fetch first)
  error: failed to push some refs to 'https://github.com/voiciJules/space_stagram.git'
  hint: Updates were rejected because the remote contains work that you do
  hint: not have locally. This is usually caused by another repository pushing
  hint: to the same ref. You may want to first integrate the remote changes
  hint: (e.g., 'git pull ...') before pushing again.
  hint: See the 'Note about fast-forwards' in 'git push --help' for details.

  <span style='font-weight:600'>The error was resolved by the below command.
  `git push -f origin main` : -f means force </span>
  ```

  ````

- In the window of spaceStagram, I replaced favicon.ico to spaceship.png and change the title as 'spaceStagram'.

- I made a simple display for the 'Title', an input for 'Start date' and an input for 'End date'.

- `npm install axios` download

##### 2024-01-25

- getDefaultImages : fetch images by using 'axios' and setImage by using 'useState' to 'images' variable
- Execute 'getDefaultImages' by using 'useEffect'
- With 'images' obtained, I showed the images by using 'map'
- Make a 'TODO' list for the work in near future
- Make images for 'emptyHeart' and 'link'
- Make a functionality for 'link' image
  - reference
  - https://www.w3schools.com/howto/howto_js_copy_clipboard.asp
  - 'link' 이미지를 클릭했을 때, image의 url을 불러와야 했는데, html5 에 있는 기능인 data 속성을 사용해서 해결하였다. <img> 태그에 data-xxx로 속성을 지정해 해당 값을 넣은 다음, 필요할 때 호출 할 수 있는 기능이다. 불러올 때는, e.target.dataset.xxx 로 불러오면 된다.
  - 예> <img src={xxx} data-value={image.url} al='xxx'>
- Make a toggleLikeHandler
  - data-title 과 map 을 이용해서 해당되는 부분의 image 만 heart 의 toggle 처리를 해준다.

##### 2024-01-26

- Save likes by using 'localStorage' when the user leaves or reloads the page
  - https://www.daleseo.com/js-web-storage/
- Show the images between startDate and EndDate by using Date Picker and moment
  - https://www.npmjs.com/package/react-datepicker
  - `npm i moment --save`
  - `moment(date).format().substring(0, 10);` => 2024-11-11
- To submit 'startDate' and 'EndDate', I made a 'submit' button. And, I made 'random' button as well to get 5 random images. For these two buttons, I made a function 'submitButtonHandler' and 'randomButtonHandler'.

##### 2024-01-29

- Add a loading state while we wait for NASA’s API to return data
  - `const [isLoading, setIsLoading] = useState(false);`
  - 제일 처음에 화면 뜰 때 랜덤이미지 5개를 가져오기전 'Loading...'이 나와야 하므로 useEffect 내에 'getDefaultImages' 전에 `setIsLoading(true)` 넣어줌.
  - 'submit', 'random' 버튼을 누르자마자 'Loading' 이미지가 나올 수 있도록, 'submitButtonHandler', 'randomButtonHandler'의 제일 첫 부분에 `setIsLoading(true)`를 넣어줌.
  - 모든 이미지를 가져온 후에는 'isLoading'이 false가 되어 이미지들을 보여줘야 하므로, 'getDefaultImages', 'getImagesWithDates' 제일 마지막 부분에 `setIsLoading(false)`를 넣어줌.
- Show video file
  - video file did't show up. I tried to use `<video>` tag, but it didn't work since it's youtube url. If we want to use youtube url to show video, we have to use `<iframe>` tag or `npm i react-youtube`. react-youtube also uses `<iframe>`. In this app, I used `<iframe>`

##### 2024-01-31

- css
  - flex reference https://studiomeal.com/archives/197

###### ERROR 1

dotenv를 사용해서 API_KEY 를 숨기려고 했는데, 아래와 같은 에러 발생.

```
Failed to compile.

Module not found: Error: Can't resolve 'path' in '/Users/hojunhwang/Documents/gitfth/portfolio_2024/space_stagram/node_modules/dotenv/lib'
BREAKING CHANGE: webpack < 5 used to include polyfills for node.js core modules by default.
This is no longer the case. Verify if you need this module and configure a polyfill for it.

If you want to include a polyfill, you need to: - add a fallback 'resolve.fallback: { "path": require.resolve("path-browserify") }' - install 'path-browserify'
If you don't want to include a polyfill, you can use an empty module like this:
resolve.fallback: { "path": false }
ERROR in ./node_modules/dotenv/lib/main.js 2:13-28
Module not found: Error: Can't resolve 'path' in '/Users/hojunhwang/Documents/gitfth/portfolio_2024/space_stagram/node_modules/dotenv/lib'

BREAKING CHANGE: webpack < 5 used to include polyfills for node.js core modules by default.
This is no longer the case. Verify if you need this module and configure a polyfill for it.

If you want to include a polyfill, you need to: - add a fallback 'resolve.fallback: { "path": require.resolve("path-browserify") }' - install 'path-browserify'
If you don't want to include a polyfill, you can use an empty module like this:
resolve.fallback: { "path": false }

ERROR in ./node_modules/dotenv/lib/main.js 3:11-24
Module not found: Error: Can't resolve 'os' in '/Users/hojunhwang/Documents/gitfth/portfolio_2024/space_stagram/node_modules/dotenv/lib'

BREAKING CHANGE: webpack < 5 used to include polyfills for node.js core modules by default.
This is no longer the case. Verify if you need this module and configure a polyfill for it.

If you want to include a polyfill, you need to: - add a fallback 'resolve.fallback: { "os": require.resolve("os-browserify/browser") }' - install 'os-browserify'
If you don't want to include a polyfill, you can use an empty module like this:
resolve.fallback: { "os": false }

ERROR in ./node_modules/dotenv/lib/main.js 4:15-32
Module not found: Error: Can't resolve 'crypto' in '/Users/hojunhwang/Documents/gitfth/portfolio_2024/space_stagram/node_modules/dotenv/lib'

BREAKING CHANGE: webpack < 5 used to include polyfills for node.js core modules by default.
This is no longer the case. Verify if you need this module and configure a polyfill for it.

If you want to include a polyfill, you need to: - add a fallback 'resolve.fallback: { "crypto": require.resolve("crypto-browserify") }' - install 'crypto-browserify'
If you don't want to include a polyfill, you can use an empty module like this:
resolve.fallback: { "crypto": false }

webpack compiled with 3 error
```

관련글

1.  https://db2dev.tistory.com/entry/React-Webpack%EC%9C%BC%EB%A1%9C-%EA%B5%AC%EC%B6%95%ED%95%9C-React-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%EC%97%90%EC%84%9C-%ED%99%98%EA%B2%BD-%EB%B3%80%EC%88%98env-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0
2.  https://raejoonee.tistory.com/25
3.  https://www.npmjs.com/package/dotenv

검색을 통해 찾은 위의 내용을 내가 제대로 이해했다면, dotenv는 fs, path, os 등 node.js에서 제공하는 것들을 사용해서 작동이 되는데, '/src' 폴더 내의 파일에서 dotenv를 import 할 경우에는 fs, path, os 등을 호출할 수 없으므로 안 되는게 당연하다는 말.

결국은, `npm install dotenv-webpack --save-dev` 을 통해 dotenv-webpack 을 설치하고 webpack.config.js 에 아래와 같이 추가해야 한다고 써 있다.

```
// webpack.config.js
const Dotenv = require('dotenv-webpack');

module.exports = {
  ...
  plugins: [
    new Dotenv()
  ]
  ...
};
```

module.exports의 여러가지 plugins 중에서 바로 하위에 위치한 plugins 에 `new Dotenv(),` 를 입력하고 다시 `npm run start` 했더니 그 전에 에러는 사라졌는데, 아래와 같은 새로운 에러가 생겨났다.

```
Compiled with warnings.

DefinePlugin
Conflicting values for 'process.env'

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

WARNING in DefinePlugin
Conflicting values for 'process.env'

1 WARNING in child compilations (Use 'stats.children: true' resp. '--stats-children' for more details)
webpack compiled with 2 warnings
```

DefinePlugin 과 충돌이 일어난다는 얘기여서,
`new webpack.DefinePlugin(env.stringified),` 부분을 지웠더니 해당 에러가 사라졌다. 하지만 아래와 같은 새로운 에러가 나타났다.

```
webpack compiled successfully
One of your dependencies, babel-preset-react-app, is importing the
"@babel/plugin-proposal-private-property-in-object" package without
declaring it in its dependencies. This is currently working because
"@babel/plugin-proposal-private-property-in-object" is already in your
node_modules folder for unrelated reasons, but it may break at any time.

babel-preset-react-app is part of the create-react-app project, which
is not maintianed anymore. It is thus unlikely that this bug will
ever be fixed. Add "@babel/plugin-proposal-private-property-in-object" to
your devDependencies to work around this error. This will make this message
go away.
```

`npm install --save-dev @babel plugin-proposal-private-property-in-object` 실행하여 문제 해결함.

###### ERROR 2

```
const linkHandler = async (e) => {
    const imageUrl = e.target.dataset.value;
    await navigator.clipboard.writeText(imageUrl);
    alert("Copied the url: " + imageUrl);
  };
```

위의 코드 실행시 아래와 같은 에러 발생함.

```
Uncaught (in promise) DOMException: Document is not focused.
[Violation] 'click' handler took 1503ms
```

아래와 같이 해결 가능.

```
const linkHandler = async (e) => {
    const imageUrl = e.target.dataset.value;
    await navigator.clipboard.writeText(imageUrl);
    alert("Copied the url: " + imageUrl);
  };

혹은

const linkHandler = (e) => {
    const imageUrl = e.target.dataset.value;
    await navigator.clipboard.writeText(imageUrl)
    .then(function() {
        alert("Copied the url: " + imageUrl);
    })
  };
```

#### TODO

- ~~Display five randomly selected images on the initial screen~~ => Done
- ~~Hide API_KEY~~ => Done
- ~~Create shareable links for each image~~ Done
- ~~When clicking the link image, copy the url and alert it~~ => Done => <span style="color: blue">Make it prettier</span>
- ~~Make a 'like'(heart?) button~~ => Done
- ~~Animate the “like” action (a heart?)~~ => Done => <span style="color: blue">Make it prettier</span>
- ~~Save likes by using 'localStorage' when the user leaves or reloads the page~~ => Done
- ~~Add a start date-picker and an end date-picker to be able to browse photos between 2 dates.~~ => Done
- ~~Add a loading state while we wait for NASA’s API to return data~~ => Done => <span style="color: blue">Make it prettier</span>
- ~~Make responsive website~~
- Make test
- ~~When image is 'video', it's not showing in the image html. Fix this problem(2019-10-21 or 2024-01-06)~~
- Make it available on the web
