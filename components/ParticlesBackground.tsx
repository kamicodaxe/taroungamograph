import Particles from "react-tsparticles";
import type { Container, Engine, ResponsiveMode } from "tsparticles-engine";
import { loadFull } from "tsparticles";

const ParticlesBackground: React.FC<{}> = () => {
    const particlesInit = async (main: Engine) => {
        console.log(main);

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
    };

    const particlesLoaded = (container: Container) => {
        console.log(container);
    };
    return (
        <Particles
            className="absolute inset-0"
            id="tsparticles"
            init={particlesInit}
            // @ts-ignore
            loaded={particlesLoaded}
            params={{
                responsive: [{
                    mode: "canvas" as ResponsiveMode.canvas,
                }],
                fullScreen: false,
                "particles": {
                    "number": {
                        "value": 8,
                        "density": {
                            "enable": true,
                            "value_area": 800
                        }
                    },
                    links: {
                        color: "#333",
                        distance: 320,
                        enable: true,
                        opacity: 0.25,
                        width: 0.5,
                    },
                    collisions: {
                        enable: true,
                    },
                    "move": {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: true,
                        speed: 1,
                        straight: false,
                    },
                    "shape": {
                        "type": [
                            "image",
                            // "circle"
                        ],
                        "image": [
                            {
                                "src": "/logos/illustrator.svg",
                                "height": 20,
                                "width": 20
                            },
                            {
                                "src": "/logos/after-effects.svg",
                                "height": 20,
                                "width": 20
                            },
                            {
                                "src": "/logos/indesign.svg",
                                "height": 20,
                                "width": 20
                            },
                            {
                                "src": "/logos/lightroom.svg",
                                "height": 20,
                                "width": 20
                            },
                            {
                                "src": "/logos/photoshop.svg",
                                "height": 20,
                                "width": 20
                            },
                            {
                                "src": "/logos/premiere.svg",
                                "height": 20,
                                "width": 20
                            }
                        ]
                    },
                    "color": {
                        "value": "#CCC"
                    },
                    size: {
                        value: { min: 15, max: 30 },
                    },
                },
                "retina_detect": false
            }} />
    )
}

export default ParticlesBackground