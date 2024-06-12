
export default function Hero(){
    const buttons = [
        {
        info: 'Get Started'
        },
        {
        info: 'Why Vite?'
        },
        {
        info: 'View on GitHub'
        },
        {
        info: '🎊 ViteConf 23!'
        }
    ]
    return(
        <section id="hero">
            <article id="main">
                <span>Vite</span>
                <h1 className=""> Next Generation Frontend Tooling</h1>
                <h2>Get ready for a development environment that can finally catch up with you.</h2>

                <div className="button-area"> 
                    {buttons.map((button) => {
                        return(
                            <button key={`button-${button.text}`}>{button.info}</button>
                        )
                        
                    })}
                </div>
               
            </article>
            <img  src="https://vitejs.dev/logo-with-shadow.png" />
        </section>
        
    )
}