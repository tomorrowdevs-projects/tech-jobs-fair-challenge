'use client'

// import node module libraries
import { Row, Col, Card, Form, Button } from 'react-bootstrap';
import Link from 'next/link';

// import hooks
import useMounted from 'hooks/useMounted';

const SignIn = () => {
  const hasMounted = useMounted();
  
  return (
    <Row className="align-items-center justify-content-center g-0 min-vh-100">
      <Col xxl={4} lg={6} md={8} xs={12} className="py-8 py-xl-0">
        {/* Card */}
        <Card className="smooth-shadow-md">
          {/* Card body */}
          <Card.Body className="p-6">
            <div className="mb-4">
              <h1>
                <Link href="/">TechSolutions Inc</Link>
              </h1>
              <p className="mb-6">Please enter your user information.</p>
            </div>
            {/* Form */}
            {hasMounted &&
              <Form>
                {/* Email */}
                <Form.Group className="mb-3" controlId="username">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" name="username" placeholder="Enter address here" required />
                </Form.Group>

                {/* Password */}
                <Form.Group className="mb-3" controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" name="password" placeholder="**************" required />
                </Form.Group>
                
                <div className="d-md-flex flex-column justify-content-center">
                  {/* Button */}
                  <Button variant="primary" type="submit">Sign In</Button>
                  <div className="mt-4 text-center">                    
                    <Link href="/authentication/forget-password" className="text-inherit fs-5">
                      <small>Forgot your password?</small>
                    </Link>                    
                  </div>
                </div>
              </Form>
            }
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}


export default SignIn
