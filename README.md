
```bash
npm i caryn-library-v2
```

Instantiate this Login with AWS Amplify v6
```js
import { LoginAws } from "caryn-library-v2";
 <LoginAws
        cardBgColor={"#EAE8DB"}
        buttonBg={"green"}
        userPool={{
          userPoolId: "userPoolId",
          userPoolClientId: "userPoolClientId",
        }}
        onSuccessAction={(obj) => console.log(obj)}
        logoImage={"Logo URL Path"}
      />

```