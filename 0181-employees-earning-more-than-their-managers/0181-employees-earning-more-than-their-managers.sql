# Write your MySQL query statement below
SELECT e.name as Employee
FROM Employee e
LEFT JOIN Employee
ON e.managerId = Employee.id
WHERE e.salary > Employee.salary