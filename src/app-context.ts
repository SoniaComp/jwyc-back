import sequelize from "@/repo/sequelize-ctx";
import Sequelize from "sequelize";

const ctx = {};

ctx["sequelize"] = sequelize;
ctx["Sequelize"] = Sequelize;

ctx["congregation"] = (sequelize, Sequelize) => {
    const Congregation = sequelize.define("congregation", {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        no: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
    })
    return Congregation
}
ctx["attendance"] = (sequelize, Sequelize) => {
    const Attendance = sequelize.define("attendance", {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        congregation: { // TODO: FOREIGN KEY
            type: Sequelize.INTEGER,
            allowNull: false
            // uniqueKey
        },
        names: {
            type: Sequelize.STRING,
            allowNull: false
        },
        count: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        create_dt: {
            type: Sequelize.DATE,
            allowNull: false
        },
        update_dt: {
            type: Sequelize.DATE,
            allowNull: false
        },
        is_scan: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            default: false
        },
        scan_qr_dt: {
            type: Sequelize.DATE,
            allowNull: false,
        }
    })
    return Attendance
}
export default ctx;