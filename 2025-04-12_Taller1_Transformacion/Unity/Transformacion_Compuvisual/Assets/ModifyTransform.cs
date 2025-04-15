using System.Collections;
using System.Collections.Generic;
using Unity.VisualScripting;
using UnityEngine;
using UnityEngine.SceneManagement;

public class ModifyTransform : MonoBehaviour
{
    float dir;
    float destination=0f;

    //Modifiable variables
    float speed=4f; //Speed of the movement of the cube
    float rotationSpeed = 70f; //Speed of the rotation of the cube
    float range= 7f; //Range for the random movement of the cube
    void Start()
    {
    }
    void Update()
    {
        //Moving the cube to a random point in a given range
        if (Mathf.Abs(destination-transform.position.x)<=1)
        { 
            destination=Random.Range(-range,range);
            dir = Mathf.Sign(destination - transform.position.x);
        }
        transform.Translate(speed * Time.deltaTime * dir,0, 0);
      
        //Rotating the cube along the x axys
        transform.Rotate(rotationSpeed * Time.deltaTime,0,0, Space.Self);

        //Changing the Scale of the cube according to the Sine function
        transform.localScale= (new Vector3(Mathf.Sin(Time.time)+1.5f, Mathf.Sin(Time.time) + 1.5f, Mathf.Sin(Time.time) + 1.5f));
    }
}
