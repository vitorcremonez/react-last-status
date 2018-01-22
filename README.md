## This package is under development... Come back soon!

## React Last Status Component

React component that shows the last status of user.

- online
- today at 00:00
- yesterday at 00:00
- monday at 00:00
- 01/01/2018 at 00:00

## Usage

Install package:
```sh
npm install --save react-last-status
```

Import component:
```js
import LastStatus from 'react-last-status';
```

Add component with respective props:
```js
<LastStatus timestamp={timestamp}/>
```

## Languages
Setting the language of component with props. 

```js
<LastStatus locale={'pt-BR'}/>
```

| locale | language |
| :---: | :---: |
| es-US | english |
| pt-BR | portuguese (Brazil) |