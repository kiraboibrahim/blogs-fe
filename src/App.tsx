import type BlogType from './types/Blog';
import Blog from './pages/blog/Blog';

const body = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lobortis interdum risus, in gravida justo gravida pretium. Proin feugiat tristique dapibus. Sed id ipsum convallis, tempor odio at, consequat elit. Duis malesuada elit odio, vitae pellentesque urna iaculis non. Nulla sit amet nisi ac magna eleifend tincidunt sit amet id dui. Aliquam vitae venenatis orci. Aenean condimentum rhoncus arcu, eget mattis tortor efficitur quis.

Quisque rhoncus viverra tellus ut lobortis. Mauris ipsum ex, ultrices sit amet pharetra eget, pretium et eros. Cras vulputate vitae magna nec mattis. Donec tristique posuere libero, porttitor porta sapien rutrum id. Phasellus ac lectus tempus, vulputate ipsum quis, aliquet dui. Donec non sem nec velit maximus aliquam ut et eros. Maecenas elementum erat ipsum, ac laoreet felis porttitor eget.

Morbi at enim finibus libero accumsan aliquam. Sed eu velit rhoncus, vulputate nibh eu, venenatis lectus. Etiam a sodales orci, in fermentum nisi. Etiam eu bibendum libero. Nam scelerisque venenatis leo id sodales. Donec tincidunt lorem quam, in varius nunc finibus at. Integer quis tempor elit, in ultrices sem. Nulla sagittis tincidunt urna, pharetra scelerisque velit efficitur quis. Nulla imperdiet metus lacus, sit amet tempor nibh volutpat in. Aliquam venenatis odio porttitor augue fringilla ultricies. Fusce ante tortor, interdum a tellus quis, mollis tincidunt risus. Aenean turpis ipsum, efficitur convallis commodo id, lobortis nec dui. Nam ut velit lacinia, fringilla risus vulputate, porta justo. Ut vitae sagittis nisl, quis fringilla massa.

Praesent at neque nisl. Donec non est ut nibh dapibus hendrerit a nec odio. Nam ullamcorper nisl vel tortor ullamcorper, quis sagittis odio scelerisque. Pellentesque suscipit sodales dolor eget imperdiet. Ut euismod vehicula elit, in rutrum diam lacinia sit amet. Morbi viverra sodales elementum. Phasellus vel laoreet nisi. Praesent scelerisque tristique ultricies.

Nam sollicitudin mauris odio, ac efficitur risus sodales feugiat. Integer sapien libero, tristique nec rhoncus sit amet, elementum a nulla. Proin nec euismod nisi. Cras bibendum gravida bibendum. Cras sit amet posuere nisi. Aliquam maximus ac mauris ut placerat. Curabitur placerat orci nisi. Duis aliquet dapibus arcu eu tristique. In non est tempus, aliquet ante non, tempor arcu. Maecenas urna turpis, rhoncus ut orci sed, fermentum efficitur nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;

Vivamus posuere dui magna, varius cursus ex gravida tempus. Integer posuere leo tortor, sed lobortis neque imperdiet eget. Nunc ultrices augue ac risus pharetra, ac elementum dolor facilisis. Aenean cursus consectetur sem eget dictum. Mauris tincidunt sodales magna suscipit consequat. Morbi convallis ligula dui. Etiam ac efficitur felis, in euismod eros. Morbi placerat, felis id euismod laoreet, enim diam hendrerit dolor, ac venenatis turpis lectus in erat. Aliquam erat volutpat. Phasellus augue risus, pretium sed molestie quis, euismod id turpis. Quisque turpis leo, condimentum ut facilisis vel, pretium a ligula. Vestibulum ut gravida sapien. Aliquam interdum nisi at felis convallis accumsan. Nullam elementum, quam vitae congue posuere, lacus tellus pellentesque nunc, ut viverra orci quam at lacus. Donec tortor metus, consectetur ac neque in, faucibus pellentesque ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.

Quisque aliquet auctor tempor. Pellentesque mollis risus vel molestie vehicula. Quisque venenatis ante odio, id sodales magna tempor eget. Integer neque lacus, tempor eu ipsum et, sollicitudin iaculis libero. Sed nec iaculis nulla. Nullam hendrerit justo nisi, eu sollicitudin ligula dignissim ut. Suspendisse efficitur elementum hendrerit.

Mauris lacus velit, porttitor non massa eu, elementum fermentum libero. Nullam feugiat hendrerit magna, et tristique eros dictum id. Donec congue libero vel nulla mattis placerat. Proin consequat aliquam arcu a porttitor. Morbi imperdiet turpis ultricies metus blandit maximus. Donec vel semper tellus, ac convallis justo. Cras eget eros justo. Nulla facilisi. Quisque vestibulum molestie augue eget dignissim. Proin sagittis quis neque et tempus. Donec consequat odio at tortor porta, nec scelerisque leo rutrum. Ut vehicula odio nec purus faucibus ullamcorper. In hac habitasse platea dictumst. Morbi ac imperdiet elit, non porta tellus. Nullam tortor dolor, malesuada ut laoreet ac, maximus eu nisl. Donec nec dignissim arcu, in scelerisque nisl.

Quisque in libero et metus tempus semper eget id est. Etiam cursus mauris sem, nec ultricies neque luctus nec. Curabitur varius ultricies arcu, ac malesuada lacus faucibus et. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras lacinia malesuada turpis ac malesuada. Vivamus lacinia dolor in ipsum mattis gravida. Vivamus nec ullamcorper libero. In leo nulla, euismod a placerat in, tincidunt eu justo. Pellentesque interdum mi in porta fermentum. Maecenas sit amet luctus quam.

Ut nunc dolor, rutrum tristique massa at, ultricies euismod augue. Fusce venenatis vehicula enim a hendrerit. In sit amet lacinia tortor. Vivamus consectetur ullamcorper nunc, quis interdum augue. Etiam a velit id quam lacinia condimentum sed eu odio. Mauris eget nunc nisl. Praesent nec odio vitae quam pretium commodo vitae quis nulla. Sed felis tortor, congue et faucibus suscipit, pulvinar id augue.
`

const sampleBlog: BlogType = {
  id: 101,
  name: "Embracing TypeScript in Modern Web Development",
  tagline: "Why Type Safety Matters for Scalable Apps",
  publicationDate: "2025-06-25",
  rating: 4.7,
  numComments: 23,
  body,
  authors: [
    {
      id: 3,
      name: "Alex Morgan",
      email: "alex.morgan@example.com"
    },
    {
      id: 4,
      name: "Taylor Kim",
      email: "taylor.kim@example.com"
    }
  ]
}

function App() {
  return (
    <>
      <Blog blog={sampleBlog} />
    </>
  )
}

export default App
