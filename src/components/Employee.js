export default function Employee(props) {
    return (
        <div>
            <h2>Employee</h2>
            <p>Name: {props.name}</p>
            <p>Role: {props.role ? props.role : "No Role kekw"}</p>
            <p>Salary: {props.salary}</p>
        </div>
    );
}