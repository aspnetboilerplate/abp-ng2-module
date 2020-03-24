# Important

Issues of this repository are tracked on https://github.com/aspnetboilerplate/aspnetboilerplate. Please create your issues on https://github.com/aspnetboilerplate/aspnetboilerplate/issues.

# abp-ng2-module

## Installation

To install this library, run:

```bash
$ npm install abp-ng2-module --save
```
## Development

To generate all `*.js`, `*.js.map` and `*.d.ts` files:

```bash
$ ng build abp-ng2-module --prod
```

## AbpHttpInterceptor

In order to use AbpHttpInterceptor in your module, first import it and AbpHttpInterceptor into your module like below;

```ts
import { AbpModule } from '@abp/abp.module';
import { AbpHttpInterceptor } from '@abp/abpHttpInterceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
```

then, add it to your module providers like below;

```ts
imports: [
    ///other imports
],
providers: [
    ///other providers
    { provide: HTTP_INTERCEPTORS, useClass: AbpHttpInterceptor, multi: true }
]
```

## License

MIT