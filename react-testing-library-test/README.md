### Installation

```
npx create-react-app react-testing-library-test
npm install --save-dev @testing-library/react
```

### 스냅샷 테스트

```js
const { container } = render(<App />);

expect(container).toMatchSnapshot();
```

- 스냅샷 테스트 추가한 후 테스트 실행하면 `src/__snapshot__/App.test.js.snap` 파일이 생성됨
- 파일 내용 확인하면 App 컴포넌트가 화면에 렌더링될 때 표시되는 HTML 내용이 저장되어 있음
- 저장된 스냅샷은 App 컴포넌트가 수정되어 화면에 표시되는 HTML 구조가 변경되면 에러를 표시하게 됨

1. 스냅샷은 화면에 표시되는 컴포넌트가 변경되었는지 감지하기 위한 테스트로 많이 사용
2. 컴포넌트를 수정하여 화면 표시가 변경된 것이 의도된 수정 -> 스냅샷 테스트로 저장된 파일 업데이트 필요
   - 에러가 표시되는 상태에서 키보드의 'u'키를 누르면 스냅샷으로 생성된 파일이 업데이트 됨
   - 새롭게 업데이트된 스냅샷 파일이 다시 기준이 되어 변경을 감지하고 에러 표시
