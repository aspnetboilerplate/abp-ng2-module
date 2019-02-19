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

In order to use AbpHttpInterceptor in your module, first import it and AbpModule into your module like below;

```ts
import { AbpModule } from '@abp/abp.module';
import { AbpHttpInterceptor } from '@abp/abpHttpInterceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
```

then, add it to your module providers like below;

```ts
imports: [
    ///other imports
    AbpModule
],
providers: [
    ///other providers
    { provide: HTTP_INTERCEPTORS, useClass: AbpHttpInterceptor, multi: true }
]
```

## License

MIT
