from app.models import db, environment, SCHEMA, Review

# Adds a review to an existing demo task
def seed_reviews():
    review1 = Review(
        task_id=1,
        user_id=1,
        description="Changed my life1",
        stars=5
    )
    review2 = Review(
        task_id=2,
        user_id=2,
        description="Changed my life2",
        stars=3
    )
    review3 = Review(
        task_id=3,
        user_id=3,
        description="Changed my life3",
        stars=4
    )
    review4 = Review(
        task_id=4,
        user_id=1,
        description="Changed my life4",
        stars=2
    )
    review5 = Review(
        task_id=5,
        user_id=2,
        description="Changed my life5",
        stars=3
    )
    review6 = Review(
        task_id=3,
        user_id=1,
        description="Changed my life6",
        stars=5
    )
    review7 = Review(
        task_id=1,
        user_id=1,
        description="Changed my life7",
        stars=4
    )
    review8 = Review(
        task_id=2,
        user_id=2,
        description="Changed my life8",
        stars=5
    )
    review9 = Review(
        task_id=3,
        user_id=3,
        description="Changed my life9",
        stars=4
    )
    review10 = Review(
        task_id=4,
        user_id=1,
        description="Changed my life10",
        stars=3
    )
    review11 = Review(
        task_id=5,
        user_id=2,
        description="Changed my life11",
        stars=2
    )
    review12 = Review(
        task_id=6,
        user_id=3,
        description="Changed my life12",
        stars=1
    )

    db.session.add(review1)
    db.session.add(review2)
    db.session.add(review3)
    db.session.add(review4)
    db.session.add(review5)
    db.session.add(review6)
    db.session.add(review7)
    db.session.add(review8)
    db.session.add(review9)
    db.session.add(review10)
    db.session.add(review11)
    db.session.add(review12)
    db.session.commit()

# Uses a raw SQL query to TRUNCATE or DELETE the reviews table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_reviews():
    if environment == "production":
        db.session.execute(f"TRUNCATE table reviews RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM reviews")
        
    db.session.commit()

 