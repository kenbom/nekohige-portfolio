import intersect from '@alpinejs/intersect'
import collapse from '@alpinejs/collapse'

export default (Alpine) => {
  Alpine.plugin(collapse),
  Alpine.plugin(intersect)
}