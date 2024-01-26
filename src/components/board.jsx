import React from "react";
import Card from './card.jsx'

const Board = () => {
    return (
        <div className="Board">
            <Card
            name='Developer'
            url='https://www.developer-tech.com'
            img='https://www.developer-tech.com/wp-content/uploads/sites/3/2020/03/developer-tech.png'
            desc='Developer News provides relevant news based off topics ranging from tech finance to new creations and discoveries.'
            />
            <Card
            name='Wired'
            url='https://www.wired.com'
            img='https://cdn.worldvectorlogo.com/logos/wired.svg'
            desc='Wired stays on the forefront of providing readers with exciting news regarding everything in the scope of technology.'
            />
            <Card
            name='SD Times'
            url='https://sdtimes.com'
            img='https://d2emerge.com/wp-content/uploads/2021/08/SDTlogo-1800px-1024x336.png'
            desc='The SD Times focus on news related to software development and provide a range of information from survey results to AI news.'
            />
            <Card
            name='SWE Daily'
            url='https://softwareengineeringdaily.com'
            img='https://play-lh.googleusercontent.com/VWaFdsPlMSMrxflmJqrFXqwnJztQ8tqffmCvXXK1MO2nc8_i5zj8-HRlAusTPnwpYg'
            desc='SWE Daily explores all the new trends in software and talk about important software you may have never heard of.'
            />
            <Card
            name='The Verge: Tech'
            url='https://www.theverge.com/tech'
            img='https://images.prismic.io/brandfetch/a73de403-27ac-4d2f-a34e-02ef71796960_3.png?auto=compress,format'
            desc='The Verge covers a broad spectrum of tech news. Check it out!'
            />
            <Card
            name='GeekWire'
            url='https://www.geekwire.com'
            img='https://upload.wikimedia.org/wikipedia/en/archive/9/99/20170102164314%21GeekWire-logo.png'
            desc='GeekWire covers a broad spectrum of tech news. Check it out!'
            />
            <Card
            name='TechCrunch'
            url='https://techcrunch.com'
            img='https://scet.berkeley.edu/wp-content/uploads/techcrunch-logo.png'
            desc='TechCrunch covers a broad spectrum of tech news. Check it out!'
            />
            <Card
            name='ZDNet'
            url='https://www.zdnet.com'
            img='https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/ZDNet_logo_2022.svg/1200px-ZDNet_logo_2022.svg.png'
            desc='ZDNet covers a broad spectrum of tech news. Check it out!'
            />
            
        </div>
    )
}

export default Board;