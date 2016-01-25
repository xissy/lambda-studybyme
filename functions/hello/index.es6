
import uppercase from './uppercase';

export function handle(e, ctx) {
  ctx.succeed({
    hello: uppercase('world, es6!'),
  });
}
