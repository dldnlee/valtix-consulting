

interface SlidingBannerProps {
  children: React.ReactNode;
}

export default function SlidingBanner({children}: SlidingBannerProps) {
  return (
    <div
                    x-data="{}"
                    x-init="$nextTick(() => {
                        let ul = $refs.logos;
                        ul.insertAdjacentHTML('afterend', ul.outerHTML);
                        ul.nextSibling.setAttribute('aria-hidden', 'true');
                    })"
                    className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
                >
                    <ul x-ref="logos" className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                        <li>
                            <h1>Hello</h1>
                        </li>
                        <li>
                            <h1>Hello</h1>
                        </li>
                        <li>
                            <h1>Hello</h1>
                        </li>
                        <li>
                            <h1>Hello</h1>
                        </li>
                        <li>
                            <h1>Hello</h1>
                        </li>
                        <li>
                            <h1>Hello</h1>
                        </li>
                        <li>
                            <h1>Hello</h1>
                        </li>
                        <li>
                            <h1>Hello</h1>
                        </li>
                    </ul>                
                </div>
  )
}