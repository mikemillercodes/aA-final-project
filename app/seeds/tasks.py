from app.models import db, environment, SCHEMA, Task

# Adds a demo task with supporting db table fields
def seed_tasks():
    task1 = Task(
        user_id=1,
        title='Office Mounting Service',
        description='Need a whiteboard, TV or other office items mounted? Hire a Tasker to get it done.',
        price=45,
        task_img_url="https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_200,w_200/v1651086046/jx5o4txptvfq8wv3rfwa.jpg"
    )
    task2 = Task(
        user_id=2,
        title='Moving Office Furniture',
        description='Moving office furniture can be a hassle, so try Taskly and take the stress out of the whole process!',
        price=55,
        task_img_url="https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_200,w_200/v1650386921/bv1adylph9ihvqjhzmlk.jpg"
    )
    task3 = Task(
        user_id=3,
        title='Shipping Services',
        description='If you need help packing and tagging boxes, Taskers are here for you! Get the shipping help you need today.',
        price=35,
        task_img_url="https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_200,w_200/v1650479047/vfxgooozxnabyxt9rkda.jpg"
    )
    task4 = Task(
        user_id=1,
        title='Inventory Sorting',
        description="Sorting your inventory doesn't have to be a huge hassle. Hire a Tasker to organize your inventory today.",
        price=67,
        task_img_url="https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_200,w_200/v1650903956/ddpi2ei6hhm6lfrhjxxj.jpg"
    )
    task5 = Task(
        user_id=2,
        title='Warehouse Organization',
        description="Get your warehouse organized with help from a skilled Tasker.",
        price=80,
        task_img_url="https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_200,w_200/v1650906503/amrtufotl6oxxt8d9oen.jpg"
    )
    task6 = Task(
        user_id=3,
        title='Drop Off Donations',
        description="Need those donations dropped off? Hire a tasker to do it for you.",
        price=25,
        task_img_url="https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_200,w_200/v1650907080/xcpcbylmwslemwypwvya.jpg"
    )
    task7 = Task(
        user_id=1,
        title='Party Clean Up',
        description="Don't hold back at your next social gathering and let a Tasker bring peace to your home the next day!",
        price=80,
        task_img_url="https://media.istockphoto.com/id/850937446/photo/janitor-cleaning-a-mess.jpg?s=612x612&w=0&k=20&c=ux4_LpJAhDWe_GDY8lxh8kNoIYFl99928FT0jDSp1xc="
    )
    task8 = Task(
        user_id=2,
        title='Wait in Line',
        description="Waiting in line can be a time consuming hassle. Let one of our taskers do it for you.",
        price=20,
        task_img_url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFsIRaptnEhMT0Xcv0JXUUX9JMD1uXjY1Ztg&usqp=CAU"
    )
    task9 = Task(
        user_id=3,
        title='TV Mounting',
        description="Taskers can properly mount your TV on the wall and leave you happily clicking the remote.",
        price=50,
        task_img_url="https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_200,w_200/v1428448636/dwr5db1lu0jzugihonrq.jpg"
    )
    task10 = Task(
        user_id=1,
        title='Home Repairs',
        description="Jacks (and Jills) of all trades can handle most of your minor home repairs.",
        price=150,
        task_img_url="https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_200,w_200/v1553040641/qsctdbs3smwibuvk93n6.jpg"
    )
    task11 = Task(
        user_id=2,
        title='Holiday Tree Decorators',
        description="In need of Christmas tree decorating services? Hire a Tasker as your personal tree decorator!",
        price=30,
        task_img_url="https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_200,w_200/v1604362131/uz6xuslalgnvch3sex7j.jpg"
    )
    task12 = Task(
        user_id=3,
        title='Yard Work Services',
        description="We can clean up your yard and remove any yard waste or rubbish.",
        price=20,
        task_img_url="https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_200,w_200/v1428448794/gweisgd5bxoafin5euse.jpg"
    )
    task13 = Task(
        user_id=1,
        title='Leaf Raking & Removal',
        description="Hire a Tasker for leaf removal.",
        price=15,
        task_img_url="https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_200,w_200/v1634753782/echtivg1mpochxfbtvsb.jpg"
    )
    task14 = Task(
        user_id=2,
        title='Lawn Mowing Services',
        description="If you're thinking 'I need my grass cut today!' then consider hiring a Tasker. Find same day lawn mowing services with TaskRabbit.",
        price=40,
        task_img_url="https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_200,w_200/v1625691609/yqintrumetdk6heb2pty.jpg"
    )
    task15 = Task(
        user_id=3,
        title='Junk Pickup',
        description="Is your home cluttered with old furniture and junk that you want to get rid of? Hire a Tasker to remove it and haul it to the dump.",
        price=60,
        task_img_url="https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_200,w_200/v1428448636/dwr5db1lu0jzugihonrq.jpg"
    )
    task16 = Task(
        user_id=1,
        title='Vacation Plant Watering',
        description="Wondering how to keep your plants alive while your away? Hire a Tasker for plant watering services and rest easy.",
        price=20,
        task_img_url="https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_200,w_200/v1646159948/npchnacmkfobqyqpmdms.jpg"
    )

    db.session.add(task1)
    db.session.add(task2)
    db.session.add(task3)
    db.session.add(task4)
    db.session.add(task5)
    db.session.add(task6)
    db.session.add(task7)
    db.session.add(task8)
    db.session.add(task9)
    db.session.add(task10)
    db.session.add(task11)
    db.session.add(task12)
    db.session.add(task13)
    db.session.add(task14)
    db.session.add(task15)
    db.session.add(task16)
    db.session.commit()

# Uses a raw SQL query to TRUNCATE or DELETE the tasks table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_tasks():
    if environment == "production":
        db.session.execute(f"TRUNCATE table tasks RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM tasks")
        
    db.session.commit()

    