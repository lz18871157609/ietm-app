CREATE TABLE sys_menu (
    menu_id     INTEGER    PRIMARY KEY AUTOINCREMENT NOT NULL,
    menu_code   varchar(32)  NOT NULL,
    menu_name   varchar(64) NOT NULL,
    app_code    varchar(32)  NOT NULL,
    app_name    varchar(64)  NOT NULL,
    icon        varchar(256) NOT NULL DEFAULT NULL,
    link        varchar(256) NOT NULL DEFAULT NULL,
    sort_no     INTEGER   NOT NULL,
    parent_menu_id INTEGER    NOT NULL,
    remark      varchar(1024)   NOT NULL,
    create_time DATETIME    NOT NULL,
    create_user INTEGER    NOT NULL,
    modify_time DATETIME    NOT NULL,
    modify_user INTEGER    NOT NULL,
    status      INTEGER    NOT NULL
);
