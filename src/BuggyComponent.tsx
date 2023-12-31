import success from './assets/success.jpeg'

interface myProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
    throwError?: boolean
}
export default function BuggyComponent(props: myProps) {
    if (props.throwError) {
        throw new Error('Ohh No there was an error!')
    }
    return (
        <div className={props.className}>
            <h2 className='text-4xl text-sky-400/80 mt-4'>Success!!</h2>
            <img src={success} alt="Success" width={400} />
        </div>
    )
}