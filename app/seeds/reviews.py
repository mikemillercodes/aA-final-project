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
    review13 = Review(
        task_id=7,
        user_id=1,
        description="Changed my life13",
        stars=4
    )
    review14 = Review(
        task_id=8,
        user_id=2,
        description="Changed my life14",
        stars=5
    )
    review15 = Review(
        task_id=7,
        user_id=3,
        description="Changed my life15",
        stars=5
    )
    review16 = Review(
        task_id=8,
        user_id=1,
        description="Changed my life16",
        stars=2
    )
    review17 = Review(
        task_id=9,
        user_id=2,
        description="Changed my life17",
        stars=3
    )
    review18 = Review(
        task_id=10,
        user_id=3,
        description="Changed my life18",
        stars=4
    )
    review19 = Review(
        task_id=11,
        user_id=1,
        description="Changed my life19",
        stars=1
    )
    review20 = Review(
        task_id=12,
        user_id=2,
        description="Changed my life20",
        stars=2
    )
    review21 = Review(
        task_id=13,
        user_id=3,
        description="Changed my life21",
        stars=4
    )
    review22 = Review(
        task_id=14,
        user_id=1,
        description="Changed my life22",
        stars=2
    )
    review23 = Review(
        task_id=15,
        user_id=2,
        description="Changed my life23",
        stars=3
    )
    review24 = Review(
        task_id=16,
        user_id=3,
        description="Changed my life24",
        stars=4
    )
    review25 = Review(
        task_id=9,
        user_id=1,
        description="Changed my life25",
        stars=5
    )
    review26 = Review(
        task_id=10,
        user_id=2,
        description="Changed my life26",
        stars=4
    )
    review27 = Review(
        task_id=11,
        user_id=3,
        description="Changed my life27",
        stars=3
    )
    review28 = Review(
        task_id=12,
        user_id=1,
        description="Changed my life28",
        stars=2
    )
    review29 = Review(
        task_id=13,
        user_id=2,
        description="Changed my life29",
        stars=3
    )
    review30 = Review(
        task_id=14,
        user_id=3,
        description="Changed my life30",
        stars=4
    )
    review31 = Review(
        task_id=15,
        user_id=1,
        description="Changed my life31",
        stars=5
    )
    review32 = Review(
        task_id=16,
        user_id=2,
        description="Changed my life32",
        stars=4
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
    db.session.add(review13)
    db.session.add(review14)
    db.session.add(review15)
    db.session.add(review16)
    db.session.add(review17)
    db.session.add(review18)
    db.session.add(review19)
    db.session.add(review20)
    db.session.add(review21)
    db.session.add(review22)
    db.session.add(review23)
    db.session.add(review24)
    db.session.add(review25)
    db.session.add(review26)
    db.session.add(review27)
    db.session.add(review28)
    db.session.add(review29)
    db.session.add(review30)
    db.session.add(review31)
    db.session.add(review32)
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

 