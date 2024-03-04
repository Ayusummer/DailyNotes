insert into
    virtual_users(id, domain_id, password, email)
values
    (
        1,
        2,
        ENCRYPT(
            'zhangsan123456',
            CONCAT('$6$', SUBSTRING(SHA(RAND()), -16))
        ),
        'zhangsan@ayusummer.com'
    );

INSERT INTO
    virtual_users(id, domain_id, password, email)
VALUES
    (
        1,
        2,
        CONCAT(
            '$6$',
            SUBSTRING(
                SHA2(
                    CONCAT(
                        'zhangsan123456',
                        RAND()
                    ),
                    512
                ),
                -16
            )
        ),
        'zhangsan@ayusummer.com'
    );

UPDATE
    virtual_users
SET
    email = 'zhangsan@ayusummer.com'
WHERE
    id = 1;

insert into
    virtual_users(id, domain_id, password, email)
values
    (
        2,
        2,
        ENCRYPT(
            '123456lisi',
            CONCAT('$6$', SUBSTRING(SHA(RAND()), -16))
        ),
        'lisi@ayusummer.com'
    );

INSERT INTO
    virtual_users(id, domain_id, password, email)
VALUES
    (
        2,
        2,
        CONCAT(
            '$6$',
            SUBSTRING(
                SHA2(
                    CONCAT(
                        '123456lisi',
                        RAND()
                    ),
                    512
                ),
                -16
            )
        ),
        'lisi@ayusummer.com'
    );

-- 在 `virtual_aliases` 表添加别名数据:
insert into
    virtual_aliases(id, domain_id, source, destination)
values
    (
        1,
        2,
        'all@ayusummer.com',
        'zhangsan@ayusummer.com'
    );

insert into
    virtual_aliases(id, domain_id, source, destination)
values
    (1, 2, 'all@ayusummer.com', 'lisi@ayusummer.com');