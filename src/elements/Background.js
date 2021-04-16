import Particles from "react-tsparticles";
import styled from "styled-components";

const Background = () => {
return (
    <BgContainer>
        <Particles
            id="tsparticles"

                options={{
                background: {
                    color: {
                    value: "#111111",
                    },
                },
                fpsLimit: 60,
                interactivity: {
                    detectsOn: "canvas",
                    events: {
                    onClick: {
                        enable: true,
                        mode: "push",
                    },
                    onHover: {
                        enable: false,
                        mode: "repulse",
                    },
                    resize: true,
                    },
                    modes: {
                    bubble: {
                        distance: 400,
                        duration: 2,
                        opacity: 0.8,
                        size: 40,
                    },
                    push: {
                        quantity: 4,
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4,
                    },
                    },
                },
                particles: {
                    color: {
                    value: "#ffffff",
                    },
                    links: {
                    color: "",
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                    },
                    collisions: {
                    enable: true,
                    },
                    move: {
                    direction: "none",
                    enable: true,
                    outMode: "bounce",
                    random: false,
                    speed: 0.5,
                    straight: false,
                    },
                    number: {
                    density: {
                        enable: true,
                        value_area: 800,
                    },
                    value: 100,
                    },
                    opacity: {
                    value: 1,
                    },
                    shape: {
                    type: "circle",
                    },
                    size: {
                    random: true,
                    value: 3,
                    },
                },
                detectRetina: true,
            }}
        />
    </BgContainer>
);
}

const BgContainer = styled.div`
    width: 100%;
    position: fixed;
    bottom: 0;
    z-index: 0;
`;

export default Background;