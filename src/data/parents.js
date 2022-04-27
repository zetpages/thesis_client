
import moment from "moment-timezone";
// "issueDate": moment().subtract(2, "days").format("DD MMM YYYY"),
// "dueDate": moment().subtract(2, "days").add(1, "month").format("DD MMM YYYY")
export default [
    {
        "invoiceNumber": 300,
        "status": "Пауза",
        "subscription": "FrontEnd21",
        "clients": "8 / 30",
        "issueDate": "01.12.21",
        "level": "Начинающий",
        "teacher": "Алим",
        "scedule": "Пн:12:30 Пт: 12:30"
    },
    {
        "invoiceNumber": 302,
        "status": "Обучается",
        "subscription": "FrontEnd22",
        "clients": "13 / 30",
        "issueDate": "01.12.21",
        "level": "Начинающий",
        "teacher": "Алим",
        "scedule": "Пн:14:30 Пт: 14:30"
    },
    {
        "invoiceNumber": 303,
        "status": "Завершили",
        "subscription": "FrontEnd32",
        "clients": "21 / 30",
        "issueDate": "01.11.21 - 12.12.21",
        "level": "Начинающий",
        "teacher": "Бакыт",
        "scedule": "Пн:13:30 Пт: 15:30"
    }
]