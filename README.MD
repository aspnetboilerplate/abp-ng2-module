# abp-ng2-module

## Installation

To install this library, run:

```bash
$ npm install abp-ng2-module --save
```
## Development

To generate all `*.js`, `*.js.map` and `*.d.ts` files:

```bash
$ npm run build
```

## AbpHttpInterceptor

In order to use AbpHttpInterceptor in your module, first import it into your module like below;

```ts
import { AbpHttpInterceptor } from '@abp/abpHttpInterceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
```

then, add it to your module providers like below;

```ts
providers: [
        { provide: HTTP_INTERCEPTORS, useClass: AbpHttpInterceptor, multi: true }
    	///other providers
    ]
```

## License

MIT
