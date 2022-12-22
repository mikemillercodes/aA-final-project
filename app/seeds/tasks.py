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
    task2 = Task(
    user_id=3,
    title='Shipping Services',
    description='If you need help packing and tagging boxes, Taskers are here for you! Get the shipping help you need today.',
    price=35,
    task_img_url="https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_200,w_200/v1650479047/vfxgooozxnabyxt9rkda.jpg"
)
